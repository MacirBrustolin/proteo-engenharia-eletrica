import { server } from '../../../config'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const project = ({project}) => {
  // const router = useRouter()
  // const { id } = router.query

  //const [project, setProject] = useState([])
  const [isLoadingProject, setLoadingProject] = useState(false)


  // useEffect(() => {
  //   setLoadingProject(true)
  //   fetch(`${server}/api/projects/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProject(data)
  //       setLoadingProject(false)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
    
  // }, [])

  if (isLoadingProject) return <p>Loading...</p>
  if (!project) return <p>No profile data</p>

  return (
    <>
      <Meta title={project.title} description={project.excerpt} />

      {/* <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos">
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
          </header>
          <p class="lead">Flowbite is an open-source library of UI components built with the utility-first
              classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
              datepickers.</p>
      </article>         */}
      
      <h1 className='text-black'>{project.title}</h1>
      <p className='text-black'>{project.description}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`)

  const project = await res.json()

  return {
      props: {
          project,
      },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`)

  const projects = await res.json()

  const ids = projects.map(project => project.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))
  return {
      paths,
      fallback: false
  }
}
export default project