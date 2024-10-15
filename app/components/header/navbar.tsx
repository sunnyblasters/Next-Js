'use client'

import "./navbar.css"
import Link from "next/link"
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation"
import { useState } from "react";



const links = [{

    name:'home',
    path:'/'
},
{

    name:'services',
    path:'/services'
},
{

    name:'resume',
    path:'/resume'
},
{

    name:'about',
    path:'/about'
},
{

    name:'contact',
    path:'/contact'
},
]


export default function Header (){

    const pathName = usePathname()

    const [isOpen, setIsOpen] = useState(false)

    const toggleButton = ()=> {

    setIsOpen(!isOpen)
}

    return (
        <header className="main-header">
            <div className="logo">Srasheed<span>.</span></div>
            <nav className="desktop-nav">
                {
                    links.map((link, index)=>{
                        return <Link href={link.path} key={index} className={` ${link.path === pathName && 'active'} link-class `}>{link.name}</Link>
                    })
                }

                <button className="nav-btn">Hire Me</button>
            </nav>

            {/* <nav className="mobile-nav mobile-nav-hidden"> */}
            <nav className={isOpen ? 'mobile-nav' : 'mobile-nav-hidden'}>

            {
                    links.map((link, index)=>{
                        return <Link href={link.path} key={index} className={` ${link.path === pathName && 'active'} link-class `}>{link.name}</Link>
                    })
                }
            </nav>
            <FaBarsStaggered className="bar-btn" onClick={toggleButton}/>

        </header>
    )
}