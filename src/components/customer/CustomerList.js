import React, { useState, useEffect } from 'react';
import { CustomerCard } from './Customer';
import { deleteCustomer, getAllCustomers, getCustomerById } from '../../modules/CustomerManager';
import { useNavigate } from 'react-router-dom';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const navigate = useNavigate();

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };
    
    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers))
    }

    useEffect(()=> {
        getCustomers();
    }, [])

    return(
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/customers/create")}}>
                    New Customer
                </button>
        </section>
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard key={customer.id} customer={customer} 
            handleDeleteCustomer={handleDeleteCustomer} />    
            )}
        </div>
            </>
    );
};
