import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Services } from './components/Services'
import { TestimonialContainer } from './components/TestimonialContainer'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='max-w-[1440px] mx-auto relative:'>
      <Header></Header>
      <Main></Main>
      <Services></Services>
      <TestimonialContainer></TestimonialContainer>
      <Gallery></Gallery>
      <Footer></Footer>
    </main>
  )
}

export default App
