import React from 'react';
import styles from './Home.module.css'
 import avataaars from '../../assets/images/avataaars.svg'
const Home = () => {
  return (
    <>
    <section className={`bg-name ${styles.bg} `}>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-1">
            <div className={`w-25   mx-auto mt-5 rounded-circle rounded`}>
              <img src={avataaars} alt=""  className={`${styles.photo} photo w-100`} />
            </div>
            <h1 className='text-center mt-3 text-white mb-5'>START FRAMEWORK</h1>
           <div className="star d-flex justify-conent align-self ">
            <div className={`${styles.lines} lines`}></div>
            <i class={`fa-solid fa-star text-white star fs-3 ${styles.star}`} ></i>
            <div className={`${styles.lines2} lines2`}></div>
           </div>
            <div className="text text-white mb-5  text-center mt-3">
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
          </div>
        </section>
    </>
      
    
  );
}
export default Home;
