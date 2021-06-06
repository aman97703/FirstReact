import React from 'react'
import Common from './Common'
import second from './Img/second.svg'

const About = ()=>{
  return(
    <>
      <Common 
        h1 = "Welcome to About "
        imgsrc = {second}
        visit = '/contact'
        btname = 'Contact Us'
      />
    </>
  )
}

export default About;