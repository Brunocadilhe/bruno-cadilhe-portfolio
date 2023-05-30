import React from 'react'
import Title from './Title'
// import { projects } from '../data'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return <section className="loading"></section>
  }

  return (
    <section className="section projects" id="projects">
      <Title title="my" subTitle="projects" />

      <div className="section-center projects-center">
        {projects.map((project) => {
          const { id, url, title, img } = project
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              className="project"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="projects-img" />
              <h3>{title}</h3>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
