import React from 'react'
import PropTypes from 'prop-types'
import RehypeReact from 'rehype-react'

import { ImgSharpInline } from '.'

const renderAst = new RehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { "img-sharp-inline": ImgSharpInline },
}).Compiler

const RenderContent = ({ htmlAst, html }) => (
  <>
    { htmlAst ? (
      <div className="content load-external-scripts">
        { renderAst(htmlAst) }
      </div>
    ) : (
      <div className="content load-external-scripts"
        dangerouslySetInnerHTML={{ __html: html }}/>
    )}
  </>
)

RenderContent.propTypes = {
  htmlAst: PropTypes.object,
  html: PropTypes.string.isRequired,
}

export default RenderContent