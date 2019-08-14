import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <PageHeader img={img}>
            <Banner title="About Us" subtitle="A little bit about us"></Banner>
        </PageHeader>
    </Layout>
)

export default AboutPage
