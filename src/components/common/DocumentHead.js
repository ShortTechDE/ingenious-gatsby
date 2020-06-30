import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

const DocumentHead = ({ site, className }) => (
  <Helmet>
    <html lang={site.lang} />
    <style type="text/css">{`${site.codeinjection_styles}`}</style>
    <noscript>
      {`<style type="text/css">
        [data-sal|='fade'] {
          opacity: 1;
        }

        [data-sal|='slide'],
        [data-sal|='zoom'] {
          opacity: 1;
          transform: none;
        }

        [data-sal|='flip'] {
          transform: none;
        }
      </style>`}
    </noscript>
    <body className={className} />
  </Helmet>
)

DocumentHead.propTypes = {
  site: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
}

export default DocumentHead