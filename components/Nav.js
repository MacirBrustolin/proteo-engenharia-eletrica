import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <>
      <div className={styles.contact}>
        <span>(45) 9 9984-9698</span>
        <span> proteoengenharia@outlook.com</span>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">PROTEO Engenharia Elétrica</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <div className="tabs">
          <a className="tab tab-bordered" href='/'>Início</a>
          <a className="tab tab-bordered" href='/about'>Sobre</a>
          <a className="tab tab-bordered">Ramos de Atuação</a> 
          <a className="tab tab-bordered">Projetos</a> 
          <a className="tab tab-bordered">Contato</a>
        </div>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    </>
  )
}

export default Nav