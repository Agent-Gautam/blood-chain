import { useState } from 'react'
import './App.css'
import Auth from './auth/Auth'
import Signup from './assets/Signup'
import Dashboard from './components/Dashboard'
import Class from './Class'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div id='app' className='w-full h-full light selection:bg-accent selection:text-white'>
        {/* <Auth /> */}
        {/* <Signup /> */}
        {/* <Dashboard /> */}
        <Class />
      </div>
    
  )
}

export default App
