import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
export default function NavBar() {

  return (
    <>
     <nav className={` ${styles.navbar} navbar navbar-expand-lg` } id="nav">
  <div className="container mt-3 mb-3 ">
    <Link className="navbar-brand text-white fw-bolder fs-3" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${styles.active} active nav-link active text-white fw-bolder `} aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.active} active nav-link  text-white fw-bolder`} to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className={` ${styles.active} active nav-link text-white fw-bolder`} to="contact" >CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

