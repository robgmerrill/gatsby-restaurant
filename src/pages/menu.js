import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
    <Layout>
        <SEO title="Home" />
        <PageHeader img={img}>
            <Banner title="Menue" subtitle="Eat all the things"></Banner>
        </PageHeader>
    </Layout>
)

export default MenuPage
