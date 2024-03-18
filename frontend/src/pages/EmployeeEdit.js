import { useState } from 'react'
import React from 'react';
import { useLocation } from 'react-router-dom';


const EmployeeEdit = () => {
    
    const location = useLocation();
    const employee = location.state ? location.state.employee : null;
console.log(employee)
  const [Name, setName] = useState(employee.Name)
  const [Email, setEmail] = useState(employee.Email)
  const [Mobile_No, setMobile_No] = useState(employee.Mobile_No)
  const [Designation, setDesignation] = useState(employee.Designation)
  const [Gender, setGender] = useState(employee.Gender)
  const [Course, setCourse] = useState(employee.Course)
  const [Img_Upload, setImgUpload] = useState(employee.Img_Upload)
  const [error, setError] = useState(null)
  console.log(employee._id)
 const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCourse((prevCourses) => {
        if (prevCourses) {
          return `${prevCourses} ${value}`;
        } else {
          return value;
        }
      });
    } else {
      setCourse((prevCourses) => {
        if (prevCourses.includes(value)) {
          return prevCourses.replace(value, '').trim().replace(/\s+/g, ' ');
        } else {
          return prevCourses;
        }
      });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!employee) {
    console.error('Employee data is missing.');
    return;
  }

  try {
    const response = await fetch(`/api/employees/${employee._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Mobile_No,
        Designation,
        Gender,
        Course,
        Img_Upload,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setName('');
      setEmail('');
      setMobile_No('');
      setDesignation('');
      setGender('');
      setCourse([]);
      setImgUpload('');
      console.log('Employee update added:', json);
      // Update the UI here without reloading the page
    }
    
  } catch (error) {
    console.error('Error occurred while updating employee:', error);
  }
};

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Update Employee</h3>

        <label>Name:</label>
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={Name}
        />

        <label>Email:</label>
        <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={Email}
        />

        <label>Mobile No:</label>
        <input 
            type="text" 
            onChange={(e) => setMobile_No(e.target.value)} 
            value={Mobile_No}
        />

        <label>Designation:</label>
        <select onChange={(e) => setDesignation(e.target.value)} value={Designation}>
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
        </select>

        <label>Gender:</label>
        <div>
            <label>
            <input 
                type="radio" 
                value="M" 
                checked={Gender === 'M'} 
                onChange={(e) => setGender(e.target.value)}
            /> Male
            </label>
            <label>
            <input 
                type="radio" 
                value="F" 
                checked={Gender === 'F'} 
                onChange={(e) => setGender(e.target.value)}
            /> Female
            </label>
        </div>

        <label>Course:</label>
        <div>
            <label>
            <input 
                type="checkbox" 
                value="MCA" 
                checked={Course.includes('MCA')} 
                onChange={handleCourseChange}
            /> MCA
            </label>
            <label>
            <input 
                type="checkbox" 
                value="BCA" 
                checked={Course.includes('BCA')} 
                onChange={handleCourseChange}
            /> BCA
            </label>
            <label>
            <input 
                type="checkbox" 
                value="BSC" 
                checked={Course.includes('BSC')} 
                onChange={handleCourseChange}
            /> BSC
            </label>
        </div>

        <label>Image Upload:</label>
        <input 
            type="file" 
            onChange={(e) => setImgUpload(e.target.files[0])} 
            accept="image/*"
        />

        <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default EmployeeEdit