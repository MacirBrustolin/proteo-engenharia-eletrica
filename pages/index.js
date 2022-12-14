import { server } from '../config'
import { useState, useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import '../styles/Home.module.css'


export default function Home( { projects, articles}) {
  // const [articles, setArticles] = useState([])
  // const [projects, setProjects] = useState([])
  const [isLoadingArticles, setLoadingArticles] = useState(false)
  const [isLoadingProjects, setLoadingProjects] = useState(false)

  return (
    <>
      <Header></Header>
      <div className='grid flex flex-col justify-center'>
        <h1>
          PROJETOS
        </h1>
        <ProjectList projects={projects}/>
        <h1>
          ARTIGOS
        </h1>
        <ArticleList articles={articles}/>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const resProjects = await fetch(`${server}/api/projects`)
  const resArticles = await fetch(`${server}/api/articles`)

  const projects = await resProjects.json()
  const articles = await resArticles.json()

  return {
      props: {
          projects,
          articles,
      },
  }
}

