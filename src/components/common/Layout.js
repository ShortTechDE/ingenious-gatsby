import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

import packageJson from '../../../package.json'

// Styles
import '../../styles/main.scss'

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node
  const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
  const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <main>
        {children}
      </main>
      <footer>
        <div className="container">
          <ul className="columns ">
            <li className="entry">
              <Link className="brand" to={site.url}>
                <span className="name">{site.title}</span>
              </Link>
            </li>
            <li className="entry">
              <div className="sub-menu">
                <span className="title">Rechtliches</span>
                <ul className="links">
                  <li className="entry">
                    <Link to="/impressum" className="link">Impressum</Link>
                  </li>
                  <li className="entry">
                    <Link to="/datenschutzerklaerung" className="link">Datenschutz</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="entry">
              <div className="sub-menu">
                <span className="title">Allgemein</span>
                <ul className="links">
                  <li className="entry">
                    <a href="mailto:info@shorttech.de" target="_blank" className="link">Kontakt</a>
                  </li>
                  <li className="entry">
                    <Link to="/branding" className="link">Branding</Link>
                  </li>
                  <li className="entry">
                    <a href="https://github.com/ShortTechDE/" target="_blank" className="link">GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="entry">
              <div className="sub-menu">
                <span className="title">Social Media</span>
                <ul className="links">
                  <li className="entry">
                    <a href={twitterUrl} target="_blank" className="link">Twitter</a>
                  </li>
                  <li className="entry">
                    <a href="https://t.me/ShortTech" target="_blank" className="link">Telegram</a>
                  </li>
                  <li className="entry">
                    <a href="https://www.instagram.com/ShortTechDE/" target="_blank" className="link">Instagram</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="copyright">
            <li className="entry">
              Copyright &copy; ShortTech.de 2016 - {new Date().getFullYear()}
            </li>
            <li className="entry">
              Version {packageJson.version}
            </li>
            <li className="entry">
              Mit ❤️ &amp;
                <div className="places">
                <span>:dab: aus Bürgstadt</span>
                <span>🏳️‍🌈 aus Leipzig</span>
                <span>🏳️‍🌈 aus Greifswald</span>
                <span>🏳️‍🌈 aus Groß-Umstadt</span>
                <span>🏳️‍🌈 aus Frankfurt</span>
                <span>🏳️‍🌈 aus Trebsen</span>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: {eq: "ghost-icon.png"}) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
