import { useState } from 'react'
import './App.css'
import Auth from './Auth'
import Signup from './Signup'
import DashBoard from './DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div id='app' className='light w-full h-full selection:bg-accent selection:text-white'>
        {/* <Auth /> */}
        {/* <Signup /> */}
        <DashBoard />
      </div>
    
  )
}

export default App
