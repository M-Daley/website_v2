import Head from 'next/head'

import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'

import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

// MAKE MOBILE FRIENDLY
// MAKE TABLET FRIENDLY

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
return (
  <>
  <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <title>mdaley</title>
  </Head>
    <div className="app-container">
      <Navigation />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  </>
)}
