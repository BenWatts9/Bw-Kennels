import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addLocation } from "../../modules/LocationManager";
import './LocationForm.css'

export const LocationForm = () => {
    const [location, setLocation] = useState({
        name: "",
        address: ""
    });

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newLocation = {...location}
        let selectedVal = event.target.value
        newLocation[event.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        addLocation(location).then(()=>navigate("/locations"))
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Name" value={location.name}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Address" value={location.address}></input>
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
        </form>
    )
}