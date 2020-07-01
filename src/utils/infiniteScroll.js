const fs = require(`fs`)

/**
* Infinite Scroll
*/

const infiniteScroll = (enable, posts) => {
  const indexIds = []
  const tagIds = {}
  const authorIds = {}

  function saveInfiniteScrollPost(post) {
    const dir = `public/infiniteScroll/`
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
    }
    const id = post.id
    const filePath = `${dir}${id}.json`
    const dataToSave = JSON.stringify(post)
    fs.writeFile(filePath, dataToSave, err => err && console.log(err)) // eslint-disable-line
  }

  posts.forEach(({ node }) => {
    if (enable) {
      saveInfiniteScrollPost(node)
    }
    indexIds.push(node.id)
    createIds(node, tagIds, authorIds)
  })

  return ({
    indexIds: indexIds,
    tagIds: tagIds,
    authorIds: authorIds,
  })
}

const createIds = (node, tagIds, authorIds) => {
  node.tags.forEach((tag) => {
    if (tagIds[tag.slug] === undefined) {
      tagIds[tag.slug] = []
    }
    tagIds[tag.slug].push(node.id)
  })

  node.authors.forEach((author) => {
    if (authorIds[author.slug] === undefined) {
      authorIds[author.slug] = []
    }
    authorIds[author.slug].push(node.id)
  })
}

module.exports = infiniteScroll