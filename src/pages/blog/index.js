import React from 'react'

import Layout from '../../components/Layout'
import BlogList from '../../components/BlogList'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Avni Blog</h1>
                        <div className="content">
                            <BlogList/>
                            <p className="has-text-weight-bold"><a href="https://chintugudiya.org/tag/avni/" target="_blank">Tech4Dev community blog of Avni</a></p>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
