import { useState } from 'react'
import gambar from './assets/Utopia.jpeg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ikhda Akmalia Putri</h1>
      <img src={gambar} alt="gambar"/>
      <p>arts is pain</p>
    </>
  )
}

export default App
