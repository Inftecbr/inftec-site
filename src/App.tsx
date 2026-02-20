import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './sections/Problem'
import Solutions from './sections/Solutions'
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
        <Problem />
        <Solutions />
        <Impact />
        <Competence />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
