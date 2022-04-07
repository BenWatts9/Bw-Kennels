import React from "react"
import { Routes, Route } from "react-router-dom"
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

export const ApplicationViews = () => {
    return (
        <>
            <Routes>

                <Route exact path="/" element={<Home />} />

                {/* Make sure you add the `exact` attribute here */}
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                

                {/* Render the animal list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />
                

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route exact path="/customers" element={<CustomerList />} />
                <Route path="/customers/create" element={<CustomerForm />} />

                {/* Render the animal list when http://localhost:3000/employees */}
                <Route exact path="/employees" element={<EmployeeList />} />
                <Route path="/employees/create" element={<EmployeeForm />} />
            </Routes>
        </>
    )
}