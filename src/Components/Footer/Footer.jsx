import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div className={` footer ${styles.footer} text-center`}>
      <div className="container pb-5">
      <div className="row">
        <div className="col-md-4 text-white">
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>


        <div className="col-md-4 text-white">
          <h3>AROUND THE WEB</h3>
          <i class={`fa-brands fa-facebook icon  me-2 ${styles.icon}`}></i>
          <i class={`fa-brands fa-twitter icon  m-2 ${styles.icon}`}></i>
          <i class={`fa-brands fa-linkedin icon  m-2  ${styles.icon}`}></i>
          <i class={`fa-solid fa-globe icon    m-2 ${styles.icon}`}></i>
        
</div>

        <div className="col-md-4 text-white text-center">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
</div>
      </div>
    </div>

<div className={`${styles.lastfooter} lastfooter text-white text-center p-3`}>
<p>Copyright © Your Website 2021</p>
</div>


     
    </>
  )
}
