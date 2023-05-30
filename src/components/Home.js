import React from 'react'
import Title from './Title'
import homeImg from '../images/profile.jfif'
import { FaLightbulb } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Home = () => {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <section className="home" id="home">
      <div className="home-title">
        <Title title="I'm" subTitle="Bruno" />
        <div className="section-center home-center">
          <article className="home-info">
            <p className="home-icon-toggle" onClick={toggleTheme}>
              <FaLightbulb className="home-lightbulb" />
            </p>
            <h4>Full Stack Web Developer.</h4>
            <p>Born and raised in Johannesburg, South Africa.</p>
            <p>Living in Portugal.</p>
          </article>
          <div className="img-container">
            <img src={homeImg} alt="home-img" className="home-img" />
            <span className="star-icon">
              <BsFillStarFill />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
