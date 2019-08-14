import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Seattle Fish Shop" subtitle="3040 17th Ave W, Seattle, WA 98119">Where is this?</Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
