import React from 'react'
import { Layout } from '../components/common'

const NotFoundPage = () => (
  <Layout>
    <header className="page-header branding">
      <div className="content  container">
        <h1 className="headline">Branding</h1>
      </div>
      <figure className="wave"></figure>
    </header>

    <section className="branding container">
      <div className="row">
        <figure className="logo color col-12"></figure>
      </div>
      <div className="row">
        <figure className="logo black col-6"></figure>
        <figure className="logo white col-6"></figure>
      </div>
      <div className="text">
        <h2 className="title">Unser Logo</h2>
        <p className="description">
          Unser Logo ist nicht nur ein einfach hingeklatscht & ein Zufallsprodukt. – Hinter dem „ST“ steckt
          tatsächlich eine Botschaft und ein einzigartiges Konzept! Dieses Logo repräsentiert und bietet neben
          dem visuellen Anker einen besonderen Wert und soll sowohl als auch eine gewisse Zielgruppe ansprechen
          und Interesse wecken. Es ist nicht dafür da, potentielle Reichweite zu generieren, sondern es ist
          dafür da, Überzeugungskraft zu wecken.
            </p>
      </div>
      <div className="row">
        <figure className="color purple col-6">
          <span className="hex">#59388D</span>
        </figure>
        <figure className="color blue col-6">
          <span className="hex">#1688A7</span>
        </figure>
      </div>
      <div className="row">
        <figure className="color white col-3">
          <span className="hex">#FFFFFF</span>
        </figure>
        <figure className="color light-gray col-3">
          <span className="hex">#C1C1C1</span>
        </figure>
        <figure className="color dark-gray col-3">
          <span className="hex">#212121</span>
        </figure>
        <figure className="color black col-3">
          <span className="hex">#111111</span>
        </figure>
      </div>
      <div className="text">
        <h2 className="title">Lila, Blau und Grau</h2>
        <p className="description">
          Unser Branding hat nicht ohne Grund die beiden Farben als Farbverlauf zugewiesen bekommen: Es ist alles
          eine Sache der Psychologie. Das lila sorgt dafür, dass sich das Logo von allen anderen besonders abhebt
          und das blau sorgt für eine Symbolisierung unserer Glaubwürdigkeit und entsprechender Ernsthaftigkeit.
          – Denn Nachrichten sind ein ernstes Thema in unserer Branche.
            </p>
      </div>
      <div className="row">
        <figure className="font montserrat col-12">
          <span className="char">Aa</span>
          <span className="name">Montserrat</span>
        </figure>
      </div>
      <div className="text">
        <h2 className="title">Fonts</h2>
        <p className="description">
          Gut gewählt ist schon halb gewonnen. Denn eine Font kann nur dann gut zu einem Branding passen, wenn
          sie gut lesbar ist und zeitgleich gut aussieht. Wir haben uns deswegen für Montserrat entschieden.
            </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
