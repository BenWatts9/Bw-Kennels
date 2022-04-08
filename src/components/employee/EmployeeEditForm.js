import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import "./EmployeeForm.css"
import { getAllLocations } from "../../modules/LocationManager";

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({ name: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { employeeId } = useParams();
    const navigate = useNavigate();

    const [locations, setLocations] = useState([]);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee}
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true); 

        const editedEmployee = {
            id: employeeId,
            location: employee.location
        }

        updateEmployee(editedEmployee)
        .then(() => navigate("/employees"))
    }

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
        })
    }, []);

    useEffect(() => {
        getAllLocations().then(locationsFromApi => {
            setLocations(locationsFromApi)
            })
        }, []);

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="name"
                        value={employee.name}
                        />
                        <label htmlFor="name">Employee name</label>
                        <label htmlFor="location">Location: </label>
					    <select value={employee.locationId}name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
                    
                </div>
                <div className="alignRight">
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingEmployee}
                        className="btn btn-primary"
                        >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}