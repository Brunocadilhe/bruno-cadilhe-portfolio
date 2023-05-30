import React from 'react'
import aboutImg from '../images/programming.svg'
import Title from './Title'
import { about } from '../data'
import { useState } from 'react'

const About = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <section className="section-about" id="about">
      <Title title="about" subTitle="me" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="profile" />
        </div>
        {about.map((about) => {
          const { id, text } = about
          return (
            <article className="about-info" key={id}>
              <h2>web application development</h2>
              <p>
                My name is Bruno Cadilhe. I was born and raised in Johannesburg
                South Africa. I went to Bishop Bavin High School and graduated
                from the University of Johannesburg with a Bcom accounting.
              </p>
              <p>
                I have successfully pursued a working career in Accounting and
                Finance for over 10 years. However, I have always had curiosity
                and interest about coding and I have always wanted to explore
                more. So in late 2021, I took the courage and decided to enroll
                full time into learning, Html, Css, Javascript, React, Nodejs
                and Mongodb through Udemy's online courses academy.
              </p>
              <p>{readMore ? text : `${text.substring(0, 25)}...`}</p>
              <button
                // href="#about"
                className="about-btn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'show less' : 'read more'}
              </button>
              {/* <p>
                These courses enabled me to further learn more about Web
                Applications and explore more about programming. In 2023 I have
                completed Web Application development courses in Front End,
                React18 and Back End, Nodejs with many projects covering both
                areas. I've also completed a MERN stack course which pieced both
                the Front End and the Back End of a Application together. From
                here onwards, I look to seek employment to gain experience and
                to further enhance my skills learnt. The learning never stops
                with Web Application development.
              </p> */}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default About
