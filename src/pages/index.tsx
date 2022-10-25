import {Route,Routes} from 'react-router-dom';
import AOS from 'aos'

import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Team from './Team'
import { useEffect } from 'react'
import Layout from '../components/layouts';

const routes = [
    {path:"/", component:<Home/>},
    {path:"/about-us", component:<AboutUs/>},
    {path:"/contact", component:<Contact/>},
    {path:"/team", component:<Team/>},
]

const Pages =()=>{
useEffect(()=>{
    AOS.init({
        duration:2000
    })
},[])

    return( 

<Routes>
   <Route element={<Layout/>}>
    {routes.map((menuData,index)=>(
        <Route 
        path={menuData.path}
        element={menuData.component}
        key = {index}/>
    ))}
    </Route>
</Routes>
        )}

        export default Pages;