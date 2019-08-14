import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
    <Layout>
        <SEO title="Home" />
        <h3>This is contact page</h3>
        <PageHeader img={img}>
            <Banner title="Contact Us" subtitle="You Can reach us at: @gmail.com"></Banner>
        </PageHeader>
    </Layout>
)

export default ContactPage
