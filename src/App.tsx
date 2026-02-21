import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tension from './sections/Tension'
import Architecture from './sections/Architecture'
import Impact from './sections/Impact'
import Competence from './sections/Competence'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <main>
        <Tension />
        <Architecture />
        <Impact />
        <Competence />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
