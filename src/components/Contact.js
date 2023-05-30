import React from 'react'
import { useGlobalContext } from '../Context'

const Contact = () => {
  const { openModal } = useGlobalContext()

  return (
    <section className="contact" id="contact">
      <div className="contact-banner">
        <h1>Web Development</h1>
        <p>By Bruno Cadilhe</p>
        <a href="#contact" className="btn contact-btn" onClick={openModal}>
          Contact
        </a>
        {/* <button href="#contact" className="btn contact-btn">
          Contact
        </button> */}
      </div>
    </section>
  )
}

export default Contact
