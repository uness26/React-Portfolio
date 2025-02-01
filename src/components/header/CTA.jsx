import React from 'react'
import CV from '../../assets/Younes-Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target="_blank" rel="noopener noreferrer">My Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA