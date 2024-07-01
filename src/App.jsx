import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  )
}

export default App
