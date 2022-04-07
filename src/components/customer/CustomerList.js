import React, { useState, useEffect } from 'react';
import { CustomerCard } from './Customer';
import { deleteCustomer, getAllCustomers, getCustomerById } from '../../modules/CustomerManager';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

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
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard key={customer.id} customer={customer} 
            handleDeleteCustomer={handleDeleteCustomer} />    
            )}
        </div>
    );
};
