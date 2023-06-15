import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
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
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('isLogin');
    setLogin(!!isLoggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={login ? <Layout view={<Home />} /> : <Login />}
        />
        <Route path="/home" element={<Layout view={<Home />} />} />
        <Route
          path="/login"
          element={login ? <Layout view={<Home />} /> : <Login />}
        />
        <Route
          path="/users"
          element={login ? <Layout view={<UsersManager />} /> : <Login />}
        />
        <Route
          path="/newuser"
          element={login ? <Layout view={<AddUser />} /> : <Login />}
        />
        <Route
          path="/roles"
          element={login ? <Layout view={<UsersRoles />} /> : <Login />}
        />
        <Route
          path="/newcar"
          element={login ? <Layout view={<InsertNewCar />} /> : <Login />}
        />
        <Route
          path="/showcars"
          element={login ? <Layout view={<SInedCars />} /> : <Login />}
        />
        <Route
          path="/newjomrok"
          element={login ? <Layout view={<AddNewJomrocCard />} /> : <Login />}
        />
        <Route
          path="/showjomrok"
          element={login ? <Layout view={<ManageJomrokCars />} /> : <Login />}
        />
        <Route
          path="/insurance"
          element={login ? <Layout view={<Insurance />} /> : <Login />}
        />
        <Route
          path="/insurancereports"
          element={login ? <Layout view={<InsuranceReports />} /> : <Login />}
        />
        <Route
          path="/jomrokrepostr"
          element={login ? <Layout view={<JomrokReports />} /> : <Login />}
        />
        <Route
          path="/signcarsreports"
          element={login ? <Layout view={<SinedReports />} /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
