import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./Home.js"
import { AnimalList } from './animal/AnimalList.js'
import { LocationList } from './location/LocationList.js'
import { CustomerList } from './customer/CustomerList.js'
import { EmployeeList } from "./employee/EmployeeList.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { LocationDetail } from "./location/LocationDetail.js"
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from "./customer/CustomerForm.js"
import { EmployeeForm } from "./employee/EmployeeForm.js"
import { LocationForm } from "./location/LocationForm.js"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register.js"
import { AnimalEditForm } from "./animal/AnimalEditForm.js"
import { CustomerEditForm } from "./customer/CustomerEditForm.js"
import { EmployeeEditForm } from "./employee/EmployeeEditForm.js"


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
            
            <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

            <Route exact path="/register" element={<Register />} />

                <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />

                {/* Make sure you add the `exact` attribute here */}
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute> } />

                <Route exact path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route path="/animals/:animalId/edit" element={
                <PrivateRoute><AnimalEditForm /></PrivateRoute>} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />
                

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route exact path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/create" element={<CustomerForm />} />
                <Route path="/customers/:customerId/edit" element={ <PrivateRoute><CustomerEditForm /></PrivateRoute>} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route exact path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/create" element={<EmployeeForm />} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />
            </Routes>
        </>
    )
    
}
