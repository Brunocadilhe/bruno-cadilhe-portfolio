import React, { useState, useEffect } from 'react'
import aboutImg from '../images/profile.jfif'
import Title from './Title'
import { FaQuoteRight } from 'react-icons/fa'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const About = () => {
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
    <section className="section" id="about">
      <Title title="about" subTitle="me" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="profile" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <article className="about-info">
          <h2>bruno cadilhe</h2>
          <h3>web developer</h3>
          <p>
            My name is Bruno Cadilhe. I was born and raised in Johannesburg
            South Africa. I went to Bishop Bavin High School and graduated from
            the University of Johannesburg with a Bcom accounting. I have
            successfully pursued a working career in Accounting and Finance for
            over 10 years.
          </p>
          <p>
            I have recently started the journey in coding and I have found a new
            passion for Web Application Development.
          </p>
          <a href="#about" className="btn" onClick={toggleTheme}>
            click me
          </a>
        </article>
      </div>
    </section>
  )
}

{
  /* <div className="section-center projects-center">
        {projects.map((project) => {
          const { id, icon, url, title, text } = project
          return (
            <article className="project" key={id}>
              <span>
                <a
                  href={url}
                  target="_blank"
                  className="projects-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </span>
              <div className="projects-info">
                <h4 className="projects-title">{title}</h4>
                <p className="projects-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div> */
}

/*
=============== 
Projects
===============
*/
// .projects {
//   background: var(--clr-white);
//   box-shadow: var(--light-shadow);
// }
// .project {
//   text-align: center;
//   margin-bottom: 3rem;
// }
// .projects-icon {
//   background: var(--clr-blue-6);
//   color: var(--clr-blue-1);
//   padding: 0.5rem;
//   display: inline-block;
//   font-size: 4rem;
//   margin-bottom: 1.5rem;
//   border-radius: 5px;
//   border: 2px solid var(--clr-black);
//   box-shadow: var(--dark-shadow);
//   cursor: pointer;
// }
// .projects-text {
//   max-width: 20rem;
//   margin-left: auto;
//   margin-right: auto;
// }

// .projects-icon:hover {
//   transform: scale(1.05);
// }

// @media screen and (min-width: 576px) {
//   .projects-center {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 2rem;
//   }
//   .project {
//     margin-bottom: 0rem;
//   }
// }
// @media screen and (min-width: 992px) {
//   .projects-center {
//     grid-template-columns: 1fr 1fr 1fr;
//   }
// }
// @media screen and (min-width: 1170px) {
//   .project {
//     display: flex;
//     text-align: left;
//   }
//   .projects-icon {
//     align-self: start;
//   }

//   .projects-info {
//     padding-left: 1rem;
//   }
//   .projects-title {
//     margin-bottom: 0.5rem;
//   }
// }

export default About
