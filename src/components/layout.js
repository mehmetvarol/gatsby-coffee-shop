/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from '../components/Globals/Navbar'
import Footer from '../components/Globals/Footer'

const Layout = ({ children }) => (
  <div>
    <Navbar/>
    {children}
    <Footer/>
</div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
