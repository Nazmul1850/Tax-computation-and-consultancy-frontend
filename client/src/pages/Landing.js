import React from 'react'




import Wrapper from '../assets/wrappers/LandingPage'
import Landing1 from '../components/landing1'
import Main from '../components/Main'
import NavbarH from '../components/NavbarH'

export const Landing = () => {
  return (
    <Wrapper>
        <NavbarH/>
        <Landing1 />
        <Main/>
    </Wrapper>
  )
}


