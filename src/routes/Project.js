import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/navBar'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project