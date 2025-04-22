import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Feature from './components/Feature'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Support />
      <Feature />
      <Feedback />
      <Contact />
      <Footer />
    </>
  )
}

export default React.memo(App)
