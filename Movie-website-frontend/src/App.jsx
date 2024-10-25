import { useState } from 'react'
import Navbar from './components/Navbar'
import Movie from './components/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Movie/>
    </>
  )
}

export default App
