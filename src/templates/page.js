import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*/
const Page = ({ data, location }) => {
  const page = data.ghostPage

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="website"
      />
      <Helmet>
        <style type="text/css">{`${page.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <header className="page-header"
          style={{background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + page.feature_image + ")  no-repeat center / cover, #111111"}}>
          <div className="content container">
            <h1 className="headline">{page.title}</h1>
          </div>
          <figure className="wave"></figure>
        </header>        
        <section className="article container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
        </section>
      </Layout>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ..GhostPageFields
    }
  }
`
