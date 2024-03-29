import React from "react"

/**
 * Infinite Scroll
 *
 * Further info 👉🏼 https://github.com/baobabKoodaa/gatsby-starter-infinite-scroll
 *
 * Global state is needed instead of component state, in order
 * to maintain scroll position after page switches.
 *
 * Global state holds all posts loaded through infinite scroll. It now works
 * with different pageContexts and ensures that posts are only loaded once.
 *
 */

export const GlobalStateContext = React.createContext({
  items: [],
  ids: [],
  isLoading: true,
  useInfiniteScroll: true, /* Fallback in case of error. */
  isInitializing: () => true,
  hasMore: () => {},
  loadMore: () => {},
  initItems: () => {},
  getItems: () => {},
})

export class GlobalStateProvider extends React.Component {
  constructor(props) {
    super(props)

    this.isInitializing = this.isInitializing.bind(this)
    this.hasMore = this.hasMore.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.initItems = this.initItems.bind(this)
    this.getItems = this.getItems.bind(this)

    this.state = {
      items: [],
      ids: [],
      isLoading: true,
      useInfiniteScroll: true,
      isInitializing: this.isInitializing,
      hasMore: this.hasMore,
      loadMore: this.loadMore,
      initItems: this.initItems,
      getItems: this.getItems,
    }
  }

  // Internal methods
  componentDidMount() {
    this.setState({ isLoading: false }) // Allow triggering infinite scroll load
  }

    exists = id => this.state.ids.indexOf(id) > -1

    findCursor = (pageContext, ids) => pageContext.postIds.reduce((pos, id, i) => (ids.indexOf(id) > -1 && i === pos && i + 1 || pos), 0)

    addItems = (pageContext, posts) => {
      if (this.state.isInitializing()) {
        this.setState(() => {
          pageContext.cursor = posts.length
          return ({
            items: posts,
            ids: posts.map(({ node }) => node.id),
          })
        })
      } else {
        this.setState((state) => {
          const nodes = posts.filter(({ node }) => !state.ids.indexOf(node.id))
          const ids = [...state.ids, ...nodes.map(({ node }) => node.id)]
          pageContext.cursor = this.findCursor(pageContext, ids)
          return ({
            items: [...state.items, ...nodes],
            ids: ids,
          })
        })
      }
    }

    // External methods
    isInitializing = () => this.state.ids.length === 0

    hasMore = pageContext => this.state.useInfiniteScroll && pageContext.cursor < pageContext.postIds.length

    loadMore = pageContext => () => {
      if (this.state.isLoading || this.isInitializing()) {
        return
      }
      const id = pageContext.postIds[pageContext.cursor]

      // id may exist due to previous loads from different pageContext
      if (this.exists(id)) {
        if (pageContext.cursor < pageContext.postIds.length) {
          pageContext.cursor = pageContext.cursor + 1
        }
        return
      }

      this.setState({ isLoading: true, error: undefined })
      fetch(`${__PATH_PREFIX__}/infiniteScroll/${id}.json`) // eslint-disable-line no-undef
        .then(res => res.json())
        .then((res) => {
          this.setState((state) => {
            pageContext.cursor = pageContext.cursor + 1
            return ({
              items: [...state.items, { node: res }],
              ids: [...state.ids, id],
              isLoading: false,
            })
          })
        }, (error) => {
          this.setState({
            isLoading: false,
            error,
            useInfiniteScroll: false,
          })
        })
    }

    initItems = (pageContext, posts) => (this.isInitializing() || !this.useInfiniteScroll) && this.addItems(pageContext, posts)

    getItems = pageContext => pageContext.postIds.filter(id => this.exists(id)).map(id => this.state.items[this.state.ids.indexOf(id)])

    render() {
      return (
        <GlobalStateContext.Provider value={this.state}>
          {this.props.children}
        </GlobalStateContext.Provider>
      )
    }
}