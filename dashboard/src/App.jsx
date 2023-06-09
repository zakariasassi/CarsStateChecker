import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import UsersManager from "./pages/UsersManager/UsersManager";
import AddUser from "./pages/AddUsers/AddUser";
import UsersRoles from "./pages/UsersRoles/UsersRoles";
import InsertNewCar from "./pages/InsertNewCar/InsertNewCar";
import SInedCars from "./pages/MangeSinedCars/SInedCars";
import AddNewJomrocCard from "./pages/SignJomrokCard/AddNewJomrocCard";
import ManageJomrokCars from "./pages/ManageJomrokCars/ManageJomrokCars";
import InsuranceReports from "./pages/Reports/insuranceReports";
import JomrokReports from "./pages/Reports/jomrokReports";
import SinedReports from "./pages/Reports/sinedReports";
import Insurance from "./pages/Insurance/Insurance";
import Home from "./pages/Home/Home";
import { AuthContext } from "./context/AuthContext";
import Employees from "./pages/Employes/Employees";
import AddEmploy from "./pages/AddEmploye/AddEmploy";
import MangeIncuranceCars from "./pages/MangeIncuranceCars/MangeIncuranceCars";
import UspdateAdmin from "./pages/UsersManager/UspdateAdmin";
import UpdateIncurance from "./pages/MangeIncuranceCars/UpdateIncurance";
import UpdateSignCar from "./pages/MangeSinedCars/UpdateSignCar";
import UpdateEmploye from "./pages/Employes/UpdateEmploye";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={login ? <Layout view={<Home />} /> : <Login />}
          />
          <Route
            path="/home"
            element={login ? <Layout view={<Home />} /> : <Login />}
          />
          <Route
            path="/login"
            element={login ? <Layout view={<Home />} /> : <Login />}
          />
          <Route
            path="/admins"
            element={login ? <Layout view={<UsersManager />} /> : <Login />}
          />
          <Route
            path="/addem"
            element={login ? <Layout view={<AddEmploy />} /> : <Login />}
          />
          <Route
            path="/users"
            element={login ? <Layout view={<Employees />} /> : <Login />}
          />
          <Route
            path="/newuser"
            element={login ? <Layout view={<AddUser />} /> : <Login />}
          />
                    <Route
            path="/updateadmin"
            element={login ? <Layout view={<UspdateAdmin />} /> : <Login />}
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
            path="/updatesignedcar"
            element={login ? <Layout view={<UpdateSignCar />} /> : <Login />}
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
            path="/insurancecars"
            element={login ? <Layout view={<MangeIncuranceCars />} /> : <Login />}
          />

          <Route
            path="/updateincurance"
            element={login ? <Layout view={<UpdateIncurance />} /> : <Login />}
          />


          <Route
            path="/updateemploye"
            element={login ? <Layout view={<UpdateEmploye />} /> : <Login />}
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
    </AuthContext.Provider>
  );
}

export default App;
