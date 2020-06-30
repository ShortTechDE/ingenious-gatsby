import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'

/**
* Navigation component
*/
const Navigation = ({ data }) => (
    <ul className="categories" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <li className="entry"><a className="link" href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a></li>
            } else {
                return <li className="entry"><AniLink cover bg="#111111" direction="up" duration={1} className="link" to={navItem.url} key={i}>{navItem.label}</AniLink></li>
            }
        })}
    </ul>
)

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
