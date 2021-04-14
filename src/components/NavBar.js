import React, { useState } from 'react'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import * as FaIcons  from 'react-icons/fa'
import * as AiIcons  from 'react-icons/ai'
import './NavBar.css'

import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import Support from '../pages/Support'
import SidebarData from './SidebarData'

export default function NavBar() {
  const [isActive, setIsActive] = useState(false)
  const showSidebar = () => setIsActive(!isActive);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars' onClick={showSidebar} >
          <FaIcons.FaBars />
        </Link>
      </div>

      <nav className={isActive ? 'nav-menu active' : 'nav-menu'} >
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars' onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return(
              <li key={index} className={item.cname}>
                <Link to={item.path} onClick={showSidebar} >
                  {item.icon}
                  <span>{item.title}</span>
                  </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/about' component={About} />
        <Route path='/support' component={Support} />
      </Switch>
    </>
  )
}

