import React from 'react'
import ProjectItem from './ProjectItem'
import styles from '../styles/Projects.module.css'
import articleStyles from '../styles/Article.module.css'

const Projects = ({projects}) => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
        {projects.map((project => (
            <ProjectItem key={project.id} project ={project}/>
        )))}
    </div>
  )
}

export default Projects