import { useEffect, useState } from 'react';
import { Link,useLocation } from "react-router-dom";
import cn from 'clsx';
import { menus } from '../../constants/menu'
import './header.style.scss'

import logo from '../../assets/img/logo.png'



const Header = () => {
    const {pathname}=useLocation()
    const [scroll, setScroll] = useState(false)

    const [menuActive, setMenuActive] = useState<Boolean | null>(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100)
        })
        return () => {
            window.removeEventListener("scroll", () => setScroll(false), false)

        }
    }, [])


    const handleMenuActive = () => {
        setMenuActive(!menuActive)
    }

    const handleDropDown = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <header id='main-header' className={cn("header", {
            ["is-fixed"]: scroll
        })}>

            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                            <div className="header__logo">
                                <Link to="/">
                                    <img src={logo} />
                                </Link>
                            </div>

                            <div className="header__right"></div>
                            <nav id='main-nav' className={cn("main-nav", {
                                ["active"]: menuActive
                            })}>

                                <ul className='menu' id='menu-primary-menu'>
                                    {menus.map((data, index) => {
                                       return (<li key={index} onClick={()=>handleDropDown(index)}
                                       className={cn("menu-item",{
                                        ["menu-item-has-children"]:data.namesub,
                                        ["active"]:activeIndex===index ||pathname===data.links
                                       })}
                                       >
                                        {
                                            data?.namesub&&(
                                                <ul className='sub-menu'>
                                                    {data.namesub.map((submenu)=>(
                                                        <li className={cn("menu-item",{
                                                            ["current-item"]:pathname===submenu.links
                                                        })}>
                                                            <Link to={submenu.links}>{submenu.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                       </li>)
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;
