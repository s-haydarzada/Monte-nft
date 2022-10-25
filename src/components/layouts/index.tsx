import React from 'react'
import {Outlet} from 'react-router-dom';
import "../../assets/style/style.scss"



const Layout = () => {
  return (
    <div className='main-layout'><Outlet/></div>
  )
}

export default Layout;