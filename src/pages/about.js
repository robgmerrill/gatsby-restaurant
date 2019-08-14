import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
    <Layout>
        <SEO title="Home" />
        <PageHeader img={img}></PageHeader>
    </Layout>
)

export default AboutPage
