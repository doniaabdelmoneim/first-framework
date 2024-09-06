import React from 'react'
import styles from './Portfolio.module.css'
import poert1 from '../../assets/images/poert1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';
import { useEffect, useState } from 'react'



export default function Portfolio() {

  const [src , setSrc] = useState("")

  useEffect(()=>{
    let projects = document.querySelectorAll(".project")
    
    for(let i = 0; i < projects.length; i++) {
      projects[i].addEventListener("click",function()  {
        setSrc(this.children[0].src)
        document.querySelector("#details").classList.remove("d-none")
      })
    }

    document.querySelector("#details").addEventListener("click",function(e)  {
      document.querySelector("#details").classList.add("d-none")
    })
    document.querySelector("#details img").addEventListener("click",function(e)  {
      e.stopImmediatePropagation()
    })

  })

  return (
    <>
<div className="container">
    <div className="row ">
      <div className="col-md-12">
        <h1 className='text-center fw-bolder mt-2'> PORTFOLIO COMPONENT</h1>
        <div className="star d-flex justify-conent align-self ">
          <div className={`${styles.lines} lines`}></div>
          <i class={`fa-solid fa-star  star fs-3 ${styles.star}`} ></i>
          <div className={`${styles.lines2} lines2`}></div>
        </div>
      </div>
        </div>
        </div>
        <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>
        <div id='details' className="d-none details bg-primary bg-opacity-50 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3">
          <div className="container">
            <div className="inner w-50 mx-auto ">
              <img src={src} alt="" className='w-100'/>
            </div>
          </div>
        </div>
        <section id="portfolio" className='text-center bg-white  py-5 '>
          <div className="container ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-5  gy-4 mt-1">

            <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={poert1} alt="house" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={port2} alt="cake" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={port3} alt="tent" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={poert1} alt="house" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={port2} alt="cake" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.work} position-relative overflow-hidden rounded-3 project`}>
                  <img className='w-100 ' src={port3} alt="tent" />
                  <div className={`${styles.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `} >
                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}