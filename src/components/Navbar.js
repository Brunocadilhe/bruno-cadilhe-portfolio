import React from 'react'
import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { pageLinks } from '../data'
import { socialLinks } from '../data'
import Logo from './Logo'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { id, href, text } = link
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a href={href} className="nav-icon">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
