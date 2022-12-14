import Nav from './Nav'
import Meta from './Meta'
import Main from './Main'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <Meta/>
        <Nav></Nav>
        {children}
        <Footer></Footer>
    </>
  )
}

export default Layout