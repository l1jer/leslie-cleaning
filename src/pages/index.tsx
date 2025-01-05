import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/Layout"
import Banner from "../components/sections/Banner"
import Services from "../components/sections/Services"
import About from "../components/sections/About"
import Reviews from "../components/sections/Reviews"
import Contact from "../components/sections/Contact"
import FAQ from "../components/sections/FAQ"
import CleaningFacts from "../components/sections/CleaningFacts"
import ServiceMap from "../components/sections/ServiceMap"

import "../styles/global.css"
import favicon from '../images/favicon.svg'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner />
      <Services />
      <div id="about">
        <About />
      </div>
      <CleaningFacts />
      <div id="reviews">
        <Reviews />
      </div>
      <FAQ />
      <ServiceMap />
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Leslie Cleaning Services | Professional Cleaning in Australia</title>
    <link rel="icon" href={favicon} type="image/svg+xml" />
    <meta
      name="description"
      content="Professional cleaning services in Australia. Specialising in house, apartment, office, and end-of-lease cleaning. Book your service today!"
    />
    <meta name="keywords" content="cleaning services, house cleaning, office cleaning, end of lease cleaning, Australia, professional cleaners" />
    <html lang="en-AU" />
  </>
)