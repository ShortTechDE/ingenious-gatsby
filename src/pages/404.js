import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'
import { Layout } from '../components/common'

const NotFoundPage = () => (
  <Layout>
    <header className="page-header error small">
      <div className="content container">
        <h1 className="headline">Seite nicht gefunden</h1>
      </div>
      <figure className="wave"></figure>
    </header>

    <section className="error container">
      <AniLink cover bg="#111111" direction="up" duration={1} to="/">Zurück zum Start</AniLink>
    </section>
  </Layout>
)

export default NotFoundPage
