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
import { AuthContext } from '../context/AuthContext';


function App() {
  const [login , setLogin] = useState(false)

  return (
 
    <AuthContext.Provider value={{login , setLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ login ? <Layout page={<Main />} /> :  <Login />} />
          <Route path='/home' element={ login ? <Layout page={<Main />} /> : <Login />} />
          <Route path='/jomrok' element={ login ? <Layout page={<Jomrok />} /> :   <Login />} />
          <Route path='/incurance' element={login ?   <Layout page={<Incurance />} /> : <Login />} />
          <Route path='/licence' element={ login ?   <Layout page={<Licence />} /> : <Login /> } />

        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>


  )
}

export default App
