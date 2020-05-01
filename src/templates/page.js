import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout, WaveHeader } from '../components/common'
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
        <WaveHeader context={page}>
          <div className="content container">
            <h1 className="headline" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">{page.title}</h1>
          </div>
        </WaveHeader>        
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
      ...GhostPageFields
    }
  }
`
