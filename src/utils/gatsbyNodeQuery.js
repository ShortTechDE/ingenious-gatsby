const gatsbyNodeQuery = `{
  allGhostPost(sort: { fields: [published_at], order: [DESC, DESC] }) {
    edges {
      node {
        # Main fields
        id
        title
        slug
        featured
        feature_image
        excerpt
        custom_excerpt
        visibility

        # Dates formatted
        created_at_pretty: created_at(formatString: "DD. MMMM YYYY")
        published_at_pretty: published_at(formatString: "DD. MMMM YYYY")
        updated_at_pretty: updated_at(formatString: "DD. MMMM YYYY")
        
        # Dates unformatted
        created_at
        published_at
        updated_at
        
        # SEO
        meta_title
        meta_description
        og_description
        og_image
        og_title
        twitter_description
        twitter_image
        twitter_title
        
        # Authors
        authors {
          name
          slug
          url
          bio
          
          # email
          cover_image
          profile_image
          twitter
          facebook
          website
          
          # ImgSharp
          coverImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 2000, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          
          profileImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }

        primary_author {
          name
          slug
          url
          bio
          # email
          cover_image
          profile_image
          twitter
          facebook
          website

          # ImgSharp
          coverImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 2000, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }

          profileImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }

        # Tags
        primary_tag {
          name
          slug
          url
          description
          feature_image
          meta_description
          meta_title
          visibility

          # ImgSharp
          featureImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 2000, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }

        tags {
          name
          slug
          url
          description
          feature_image
          meta_description
          meta_title
          visibility

          # ImgSharp
          featureImageSharp {
            base
            publicURL
            childImageSharp {
              fluid(maxWidth: 2000, quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }

        # Content
        plaintext
        html

        # Additional fields
        url
        canonical_url
        uuid
        codeinjection_foot
        codeinjection_head
        codeinjection_styles
        comment_id
        reading_time

        # Transformed html
        childHtmlRehype {
          html
          htmlAst
          tableOfContents
        }

        # ImgSharp
        featureImageSharp {
          base
          childImageSharp {
            fluid(maxWidth: 500, quality: 80) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }

  allGhostTag(sort: { order: ASC, fields: name }) {
    edges {
      node {
        slug
        url
        postCount
      }
    }
  }

  allGhostAuthor(sort: { order: ASC, fields: name }) {
    edges {
      node {
        slug
        url
        postCount
      }
    }
  }

  allGhostPage(sort: { order: ASC, fields: published_at }) {
    edges {
      node {
        slug
        url
      }
    }
  }
  
  site {
    siteMetadata {
      postsPerPage
    }
  }
}`

module.exports = gatsbyNodeQuery