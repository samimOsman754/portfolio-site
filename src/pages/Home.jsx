import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import About from './About'
import Skills from '../components/Skills'
import Projects from './Projects'


const Home = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default Home