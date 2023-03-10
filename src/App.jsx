import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './componets/Header'
import Main from './componets/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  )
}

export default App
