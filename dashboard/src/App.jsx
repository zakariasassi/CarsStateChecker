import { useState } from 'react'
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {

  return (
    <>

   <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route path='/home' element={<Layout />} />
          <Route path='/login' element={<Login/>} />

        </Routes>
    </BrowserRouter> 




    </>
  )
}

export default App
