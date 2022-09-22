import React from 'react'
import './about.css'
import ME from '../../assets/meab.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" className='imgabout'  />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>No clients</small>
            </article>

            <article className='about__card '>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 1 Project</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dignissimos nostrum, 
            ipsum quisquam similique a blanditiis unde est possimus dolorum 
            architecto, veniam asperiores soluta consectetur quis ducimus ab quam eligendi.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about