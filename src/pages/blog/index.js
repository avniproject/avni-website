import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="margin-top-0">
                    <h1
                        className="is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            backgroundColor: '#f40',
                            color: 'white',
                            padding: '1rem',
                            paddingLeft: '3rem'
                        }}
                    >Avni Blog</h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <p className="has-text-weight-bold"><a href="https://chintugudiya.org/tag/avni/" target="_blank">Tech4Dev community blog of Avni</a></p>
                            <BlogRoll/>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
