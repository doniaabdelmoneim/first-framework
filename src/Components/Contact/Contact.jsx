import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
     <section className={`bg-name ${styles.bg} `}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className='text-center fw-bolder mt-2'>CONTACT SECTION</h1>
        <div className="star d-flex justify-conent align-self ">
          <div className={`${styles.lines} lines`}></div>
          <i class={`fa-solid fa-star  star fs-3 ${styles.star}`} ></i>
          <div className={`${styles.lines2} lines2`}></div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="container p-5" id="contact">
          <input type="text" className="form-control mt-4 mb-4" placeholder="UserName" />
          <input type="number" className="form-control mt-4 mb-4" placeholder="UserAge" />
          <input type="email" className="form-control mt-4 mb-4" placeholder="UserEmail" />
          <input type="password" className="form-control mt-4 mb-4" placeholder="UserPassword" />
          <button type="button" className="btn " style={{color:'white', background:'#1ABC9C'}}> send Message </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
