import React from 'react'
import { Link } from 'react-router-dom'




import Wrapper from '../assets/wrappers/LandingPage'
import Landing_1 from '../components/landing1'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export const Landing = () => {
  return (
    <Wrapper>
        <Navbar/>
        <Landing_1 />
        <Main/>
    </Wrapper>
  )
}


