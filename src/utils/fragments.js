import { graphql } from 'gatsby'

// Used for site config
export const siteMetadataFields = graphql`
  fragment SiteMetadataFields on SiteSiteMetadata {
    siteUrl
    postsPerPage
    siteTitleMeta
    siteDescriptionMeta
    shareImageWidth
    shareImageHeight
    shortTitle
    siteIcon
    backgroundColor
    themeColor
    overwriteGhostNavigation {
      label
      url
    }
    navigation {
      label
      url
    }
  }
`

// Used for tag archive pages
export const ghostTagFields = graphql`
  fragment GhostTagFields on GhostTag {
    slug
    url
    name
    visibility
    feature_image
    description
    meta_title
    meta_description

    # ImgSharp
    featureImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Used for author pages
export const ghostAuthorFields = graphql`
  fragment GhostAuthorFields on GhostAuthor {
    slug
    url
    name
    bio
    cover_image
    profile_image
    location
    website
    twitter
    facebook
    meta_title
    meta_description

    # ImgSharp
    coverImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    profileImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

/* eslint-disable camelcase */
export const ghostPostFields_main = graphql`
  fragment GhostPostFields_main on GhostPost {
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
    created_at_pretty: created_at(formatString: "DD. MMMM YYYY", locale: "de")
    published_at_pretty: published_at(formatString: "DD. MMMM YYYY", locale: "de")
    updated_at_pretty: updated_at(formatString: "DD. MMMM YYYY", locale: "de")

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
      ...GhostAuthorFields
    }
    primary_author {
      ...GhostAuthorFields
    }
    # Tags
    primary_tag {
      ...GhostTagFields
    }
    tags {
      ...GhostTagFields
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

    # Newsletter
    send_email_when_published
    email_subject

    # Transformed html
    childHtmlRehype {
      html
      htmlAst
      tableOfContents
    }
  }
`

export const ghostPostFields = graphql`
  fragment GhostPostFields on GhostPost {
    ...GhostPostFields_main

    # ImgSharp
    featureImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }    
    }
  }
`

export const ghostPostFieldsForIndex = graphql`
  fragment GhostPostFieldsForIndex on GhostPost {
    ...GhostPostFields_main

    # ImgSharp
    featureImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Used for single pages
export const ghostPageFields = graphql`
  fragment GhostPageFields on GhostPage {
    # Main fields
    title
    slug
    featured
    feature_image
    excerpt
    custom_excerpt
    visibility

    # Dates formatted
    created_at_pretty: created_at(formatString: "DD. MMMM YYYY", locale: "de")
    published_at_pretty: published_at(formatString: "DD. MMMM YYYY", locale: "de")
    updated_at_pretty: updated_at(formatString: "DD. MMMM YYYY", locale: "de")

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
      ...GhostAuthorFields
    }
    primary_author {
      ...GhostAuthorFields
    }

    # Tags
    primary_tag {
      ...GhostTagFields
    }
    tags {
      ...GhostTagFields
    }

    # Content
    plaintext
    html

    # Additional fields
    url
    canonical_url
    uuid
    page
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
      publicURL
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Used for settings
export const ghostSettingsFields = graphql`
  fragment GhostSettingsFields on GhostSettings {
    title
    description
    url
    logo
    icon
    cover_image
    facebook
    twitter
    lang
    timezone
    codeinjection_head
    codeinjection_foot
    codeinjection_styles

    navigation {
      label
      url
    }
    secondary_navigation {
      label
      url
    }

    # ImgSharp
    logoSharp {
      base
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    iconSharp {
      base
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    coverImageSharp {
      base
      publicURL
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
