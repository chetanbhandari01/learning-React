import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (    //header ke niche outlet hoga usme change karna and footer same hoga
    <>
    <Header/>
    <Outlet />  
    <Footer />
    </>
  )
}

export default Layout