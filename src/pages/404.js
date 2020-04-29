import React from 'react'
import { Link } from 'gatsby'
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
      <Link to="/">Zurück zum Start</Link>
    </section>
  </Layout>
)

export default NotFoundPage
