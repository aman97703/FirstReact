import React from 'react';
import Common from './Common';
import web from './Img/first.svg'

const Home = () => {
  return (
    <>
      <Common 
        h1 = "Grow Your Business with "
        imgsrc = {web}
        visit = '/service'
        btname = 'Get Started'
      />
    </>
  )
}

export default Home;