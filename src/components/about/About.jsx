import React from 'react'
import './about.css'
import ME from '../../assets/meabout.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" className='imgabout' />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>No Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>No clients</small>
            </article>

            <article className='about__card '>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 1 Project</small>
            </article>
          </div>

          <p>
            I'm Younes Ben Ammar, a recent graduate from the Higher Institute of Computer Science. Hailing from Tunisia,
            I'm on a continuous quest for new adventures and opportunities.
            My academic journey has equipped me with a strong foundation in computer science,
            and my insatiable curiosity drives me to explore the ever-evolving landscape of technology.
            Ready to embark on new challenges,I bring a passion for learning and a commitment to making a meaningful impact in the world of computing.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about