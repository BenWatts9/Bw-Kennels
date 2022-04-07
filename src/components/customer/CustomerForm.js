import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css'

export const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: "",
        address: ""
    });

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newCustomer = {...customer}
        let selectedVal = event.target.value
        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
        addCustomer(customer).then(()=>navigate("/customers"))
    }

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Name" value={customer.name}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Customer Address</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Address" value={customer.address}></input>
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
          </button>
        </form>
    )
}