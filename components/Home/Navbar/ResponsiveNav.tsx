"use client"

import { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

function ResponsiveNav() {

    const [showNav, setShowNav] = useState(false)
    const handleNavShow = () => {
      setShowNav(true);
    }
    const handleNavHide = () => {
      setShowNav(false);
    }
    
  return (
    <div>
        <Navbar openNav={handleNavShow} />
        <MobileNav showNav={showNav} hideNav={handleNavHide} />
    </div>
  )
}

export default ResponsiveNav