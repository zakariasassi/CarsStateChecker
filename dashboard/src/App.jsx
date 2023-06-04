import { useState } from 'react'
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import UsersManager from './pages/UsersManager/UsersManager';
import AddUser from './pages/AddUsers/AddUser';
import UsersRoles from './pages/UsersRoles/UsersRoles';
import InsertNewCar from './pages/InsertNewCar/InsertNewCar';
import SInedCars from './pages/MangeSinedCars/SInedCars';
import AddNewJomrocCard from './pages/SignJomrokCard/AddNewJomrocCard';
import ManageJomrokCars from './pages/ManageJomrokCars/ManageJomrokCars';
import InsuranceReports from './pages/Reports/insuranceReports';
import JomrokReports from './pages/Reports/jomrokReports';
import SinedReports from './pages/Reports/sinedReports';
import Insurance from './pages/Insurance/Insurance';
import Home from './pages/Home/Home';


function App() {

  return (
    <>

   <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout view={<Home/>} />} />
          <Route path='/home' element={<Layout view={<Home/>} />}/>
          <Route path='/login' element={<Login/>} />

          <Route path='/users' element={<Layout view={<UsersManager/>} />} />
          <Route path='/newuser' element={<Layout view={<AddUser/> } />} />
          <Route path='/roles' element={ <Layout view={<UsersRoles/> } /> } />
          <Route path='/newcar' element={ <Layout view={<InsertNewCar/> } /> } />
          <Route path='/showcars' element={ <Layout view={<SInedCars /> } /> } />
          <Route path='/newjomrok' element={   <Layout view={<AddNewJomrocCard/> } />  } />
          <Route path='/showjomrok' element={  <Layout view={<ManageJomrokCars/>  }  /> } />
          <Route path='/insurance' element={  <Layout view={<Insurance /> }  />  } />
          <Route path='/insurancereports' element={  <Layout view={<InsuranceReports/> }  />  } />
          <Route path='/jomrokrepostr' element={ <Layout view={<JomrokReports/> }  />} />
          <Route path='/signcarsreports' element={ <Layout view={<SinedReports/> }  />} />


        </Routes>
    </BrowserRouter> 




    </>
  )
}

export default App
