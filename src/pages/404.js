import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Layout } from '../components/common'

const NotFoundPage = () => (
  <Layout>
    <header class="page-header error small">
      <div class="content container">
        <h1 class="headline">Seite nicht gefunden</h1>
      </div>
      <figure class="wave"></figure>
    </header>

    <section class="error container">
      <AniLink cover bg="#111111" direction="up" duration={0.8} to="/">Zurück zum Start</AniLink>
    </section>
  </Layout>
)

export default NotFoundPage
