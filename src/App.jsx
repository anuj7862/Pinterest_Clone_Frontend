import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SignupPage/>
    </>
  )
}

export default App
