import React from 'react'
import Link from 'next/link'

const Project = ({project}) => {
  return (
    <Link href={`/project/${project.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">`{project.title}`</h2>
              <p>{project.exerpt}</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">Continue Lendo</button>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default Project