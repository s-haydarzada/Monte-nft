import React from 'react'
import {Outlet} from 'react-router-dom';



const Layout = () => {
  return (
    <div className='main-layout'><Outlet/></div>
  )
}

export default Layout;