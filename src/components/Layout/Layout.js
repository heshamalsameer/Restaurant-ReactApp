import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
      <Header/>
      <h1>{props.children}</h1>
      <Footer/>
    </>
  )
}

export default Layout
