import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
    <Layout>
        <SEO title="Home" />
        <PageHeader img={img}></PageHeader>
    </Layout>
)

export default MenuPage
