import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Navigation, DocumentHead } from '.'
import packageJson from '../../../package.json'

// Styles
import '../../styles/main.scss'

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node
  const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}/` : null
  const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}/` : null

  return (
    <>
      <DocumentHead site={site} className={bodyClass} />

      <input type="checkbox" id="gn-menustate" className="gn-menustate" aria-hidden="true" />
      <nav id="globalnav">
        <div className="content container">
          <AniLink cover bg="#111111" direction="up" duration={1} className="brand" to="/" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
            <span className="name">{site.title}</span>
          </AniLink>
          <div className="menu">
            <label className="menuicon" htmlFor="gn-menustate" aria-hidden="true">
              <span className="bread bread-top">
                <span className="crust crust-top"></span>
              </span>
              <span className="bread bread-bottom">
                <span className="crust crust-bottom"></span>
              </span>
            </label>
            <Navigation data={site.navigation} />
          </div>
        </div>
      </nav>

      <main>
        {/* Main content will be inserted here*/}
        {children}
      </main>

      <footer>
        <div className="container">
          <ul className="columns ">
            <li className="entry" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
              <AniLink cover bg="#111111" direction="up" duration={1} className="brand" to="/">
                <span className="name">{site.title}</span>
              </AniLink>
            </li>
            <li className="entry" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
              <div className="sub-menu">
                <span className="title">Rechtliches</span>
                <ul className="links">
                  <li className="entry">
                    <AniLink cover bg="#111111" direction="up" duration={1} to="/impressum/" className="link">Impressum</AniLink>
                  </li>
                  <li className="entry">
                    <AniLink cover bg="#111111" direction="up" duration={1} to="/datenschutzerklaerung/" className="link">Datenschutz</AniLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="entry" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="200">
              <div className="sub-menu">
                <span className="title">Allgemein</span>
                <ul className="links">
                  <li className="entry">
                    <a href="mailto:info@shorttech.de" target="_blank" className="link">Kontakt</a>
                  </li>
                  <li className="entry">
                    <AniLink cover bg="#111111" direction="up" duration={1} to="/branding/" className="link">Branding</AniLink>
                  </li>
                  <li className="entry">
                    <a href="https://github.com/ShortTechDE/" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="entry" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="300">
              <div className="sub-menu">
                <span className="title">Social Media</span>
                <ul className="links">
                  <li className="entry">
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="link">Twitter</a>
                  </li>
                  <li className="entry">
                    <a href="https://www.instagram.com/ShortTechDE/" target="_blank" rel="noopener noreferrer" className="link">Instagram</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="copyright" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="400">
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
                <span>🧂 aus Oschatz</span>
                <span>🏳️‍🌈 aus Groß-Umstadt</span>
                <span>🏳️‍🌈 aus Frankfurt</span>             
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
