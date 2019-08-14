import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Seattle Fish Shop" subtitle="3040 17th Ave W, Seattle, WA 98119">
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
