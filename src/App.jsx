import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BON VOYAGE</h1>
      <h2>Your Travel Journal App</h2>
      <h3>Username Or Email</h3>
      <p>username_example</p>
      <h3 className='callToAction'>Sign in</h3>
    </>
  )
}

export default App
