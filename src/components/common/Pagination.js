import Link from 'gatsby-plugin-transition-link'
import PropTypes from 'prop-types'
import React from 'react'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div>
        {previousPagePath &&
          <Link to={previousPagePath} rel="prev">Previous</Link>
        }
      </div>
      <div>
        {nextPagePath &&
          <Link to={nextPagePath} rel="next">Next</Link>
        }
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination