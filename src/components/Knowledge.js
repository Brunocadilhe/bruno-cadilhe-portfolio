import React from 'react'
import Title from './Title'
import { knowledge } from '../data'
// import { backCard } from '../data'
import '../index.css'

const Knowledge = () => {
  return (
    <section className="section-k" id="knowledge">
      <Title title="my" subTitle="knowledge" />

      <div className="card">
        {knowledge.map((know) => {
          const { id, image, title, info } = know
          return (
            <article className="knowledge-card" key={id}>
              <div className="knowledge-img-container">
                <img src={image} className="knowledge-img" alt={title} />
              </div>
              <div className="knowledge-info">
                <div className="knowledge-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
              </div>
            </article>
          )
        })}
      </div>

      {/* <div className="card-back">
        {backCard.map((back) => {
          const { id, image, title, info } = back
          return (
            <article className="knowledge-card-back" key={id}>
              <div className="knowledge-img-container-back">
                <img src={image} className="knowledge-img-back" alt={title} />
              </div>
              <div className="knowledge-info-back">
                <div className="knowledge-title-back"></div>
                <h4>{title}</h4>
                <div></div>
                <p>{info}</p>
              </div>
            </article>
          )
        })}
      </div> */}
    </section>
  )
}

export default Knowledge
