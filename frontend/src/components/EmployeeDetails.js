import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDetails = ({ employee }) => {
    const navigate = useNavigate();
    const handleEdit = () =>{
        navigate('/EmployeeEdit', { state: { employee:employee }})
    }

    const handleDelete =  async() =>{
        try {
        const response = await fetch(`/api/employees/${employee._id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          window.location.reload();
        } else {
          console.error('Failed to delete employee');
        }
      } catch (error) {
        console.error('Error occurred while deleting employee:', error);
      }
    }
  return (
    <div className="employee-details">
      <h4>{employee._id}</h4>
      <h4>{employee.Img_Upload}</h4>
      <h4>{employee.Name}</h4>
      <h4>{employee.Email}</h4>
      <h4>{employee.Mobile_No}</h4>
      <h4>{employee.Designation}</h4>
      <h4>{employee.Gender}</h4>
      <h4>{employee.Course}</h4>
      <p>{employee.createdAt}</p>
      <span onClick={handleEdit}> Edit</span>
      <span onClick={handleDelete}> Delete</span>
    </div>
  )
}

export default EmployeeDetails