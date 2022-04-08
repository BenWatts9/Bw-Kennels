import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);

  const handleControlledInputChange = (event) => {
    const newAnimal = { ...animal }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    }
    newAnimal[event.target.id] = selectedVal
    setAnimal(newAnimal)
    }

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
	    locationId: animal.locationId,
	    customerId: animal.customerId
    };

  //pass the editedAnimal object to the database
  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    //load location data and setState
    getAllLocations().then(locationsFromApi => {
        setLocations(locationsFromApi)
        })
    }, []);

 useEffect(() => {
    //load customer data and setState
    getAllCustomers().then(customersFromAPI => {
        setCustomers(customersFromAPI)
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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a location</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                ))}
            </select>
            <label htmlFor="customerId">Customer: </label>
            <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a customer</option>
                {customers.map(c => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

			
          </div>
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}