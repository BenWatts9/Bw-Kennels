import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './Employee';
import { deleteEmployee, getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const getEmployees = () => {
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const handleDeleteEmployee = id => {
      deleteEmployee(id)
      .then(() => getAllEmployees().then(setEmployees))
  }

  useEffect(() => {
    getEmployees();
  }, []);
  
  return(
    <>
    <section className="section-content">
      <button type="button"
        className="btn"
        onClick={() => {navigate("/employees/create")}}>
      New Employee
      </button>
    </section>
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee}
        handleDeleteEmployee={handleDeleteEmployee} />
        )}
    </div>
    </>
  );
};