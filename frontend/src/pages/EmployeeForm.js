import { useState } from 'react'

const EmployeeForm = () => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile_No, setMobile_No] = useState('')
  const [Designation, setDesignation] = useState('')
  const [Gender, setGender] = useState('')
  const [Course, setCourse] = useState('')
  const [Img_Upload, setImgUpload] = useState('')
  const [error, setError] = useState(null)

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
    e.preventDefault()
    const employee = {Name,Email , Mobile_No, Designation,Gender,Course ,Img_Upload}
    
    const response = await fetch('/api/employees', {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setEmail('')
      setMobile_No('')
      setDesignation('')
      setGender('')
      setCourse('')
      setImgUpload('')
      console.log('new employee added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Employee</h3>

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

export default EmployeeForm