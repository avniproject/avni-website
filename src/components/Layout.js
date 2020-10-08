import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import {withPrefix} from "gatsby"

const TemplateWrapper = ({hero, children}) => {
    const {title, description} = useSiteMetadata();
    return (
        <div>
            {hero ? hero : <Navbar/>}
            <div>{children}</div>
            <Footer/>
        </div>
    )
};

export default TemplateWrapper
