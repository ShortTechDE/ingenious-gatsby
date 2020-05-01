import React from 'react'
import { Layout } from '../components/common'

const BrandingPage = () => (
  <Layout>
    <header className="page-header branding">
      <div className="content container">
        <h1 className="headline" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">Branding</h1>
      </div>
      <figure className="wave"></figure>
    </header>

    <section className="branding container">
      <div className="row">
        <figure className="logo color col-12" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease"></figure>
      </div>
      <div className="row">
        <figure className="logo black col-6" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease"></figure>
        <figure className="logo white col-6" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100"></figure>
      </div>
      <div className="text">
        <h2 className="title" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">Unser Logo</h2>
        <p className="description" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
          Unser Logo ist nicht nur ein einfach hingeklatscht & ein Zufallsprodukt. – Hinter dem „ST“ steckt
          tatsächlich eine Botschaft und ein einzigartiges Konzept! Dieses Logo repräsentiert und bietet neben
          dem visuellen Anker einen besonderen Wert und soll sowohl als auch eine gewisse Zielgruppe ansprechen
          und Interesse wecken. Es ist nicht dafür da, potentielle Reichweite zu generieren, sondern es ist
          dafür da, Überzeugungskraft zu wecken.
        </p>
      </div>
      <div className="row">
        <figure className="color purple col-6" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
          <span className="hex">#59388D</span>
        </figure>
        <figure className="color blue col-6" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
          <span className="hex">#1688A7</span>
        </figure>
      </div>
      <div className="row">
        <figure className="color white col-3" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
          <span className="hex">#FFFFFF</span>
        </figure>
        <figure className="color light-gray col-3" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
          <span className="hex">#C1C1C1</span>
        </figure>
        <figure className="color dark-gray col-3" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="200">
          <span className="hex">#212121</span>
        </figure>
        <figure className="color black col-3" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="300">
          <span className="hex">#111111</span>
        </figure>
      </div>
      <div className="text">
        <h2 className="title" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">Lila, Blau und Grau</h2>
        <p className="description" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
          Unser Branding hat nicht ohne Grund die beiden Farben als Farbverlauf zugewiesen bekommen: Es ist alles
          eine Sache der Psychologie. Das lila sorgt dafür, dass sich das Logo von allen anderen besonders abhebt
          und das blau sorgt für eine Symbolisierung unserer Glaubwürdigkeit und entsprechender Ernsthaftigkeit.
          – Denn Nachrichten sind ein ernstes Thema in unserer Branche.
        </p>
      </div>
      <div className="row">
        <figure className="font montserrat col-12" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
          <span className="char" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">A</span>
          <span className="char" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="200">a</span>
          <span className="name" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="300">Montserrat</span>
        </figure>
      </div>
      <div className="text">
        <h2 className="title" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">Fonts</h2>
        <p className="description" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
          Gut gewählt ist schon halb gewonnen. Denn eine Font kann nur dann gut zu einem Branding passen, wenn
          sie gut lesbar ist und zeitgleich gut aussieht. Wir haben uns deswegen für Montserrat entschieden.
        </p>
      </div>
    </section>
  </Layout>
)

export default BrandingPage
