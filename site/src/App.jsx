import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Login from './pages/Login/Lgoin'
import Main from './pages/Main/Main';
import Layout from './components/Layout/Layout';
import Jomrok from './pages/JomrokCheck/Jomrok'
import Licence from './pages/LicenceCheck/Licence'
import Incurance from './pages/IncuranceCheck/Incurance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Layout page={<Main />} />} />
          <Route path='/jomrok' element={<Layout page={<Jomrok />} />} />
          <Route path='/incurance' element={<Layout page={<Incurance />} />} />
          <Route path='/licence' element={<Layout page={<Licence />} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
