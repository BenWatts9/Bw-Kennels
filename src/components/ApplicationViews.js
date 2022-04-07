import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home.js"
import { AnimalList } from './animal/AnimalList.js'
import { LocationList } from './location/LocationList.js'
import { CustomerList } from './customer/CustomerList.js'
import { EmployeeList } from "./employee/EmployeeList.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { LocationDetail } from "./location/LocationDetail.js"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>

                <Route exact path="/" element={<Home />} />

                {/* Make sure you add the `exact` attribute here */}
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />

                {/*
                This is a new route to handle a URL with the following pattern:
                http://localhost:3000/animals/1

                It will not handle the following URL because the `(\d+)`
                matches only numbers after the final slash in the URL
                http://localhost:3000/animals/jack
                */}

                {/* Render the animal list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the animal list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}