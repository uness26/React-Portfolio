import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/youness-ben-ammar-a4101124a/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/uness26?tab=projects' target='_blank'><AiFillGithub/></a>
        <a href='https://dribble.com' target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials