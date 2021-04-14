import React from 'react'
import * as FaIcons  from 'react-icons/fa'
import * as AiIcons  from 'react-icons/ai'
import * as IoIcons  from 'react-icons/io'
import * as RiIcons  from 'react-icons/ri'

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cname: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cname: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <RiIcons.RiInformationLine />,
    cname: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoIosHelpCircle />,
    cname: 'nav-text'
  }
]

export default SidebarData;
