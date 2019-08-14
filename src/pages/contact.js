import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
    <Layout>
        <SEO title="Home" />
        <h3>This is contact page</h3>
        <PageHeader img={img}></PageHeader>
    </Layout>
)

export default ContactPage
