import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import EmployeeDetails from "../components/EmployeeDetails"

const EmployeeList = () => {

    const [employees, setEmployees] = useState(null)
    const [cnt, setCnt] = useState(0)
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/api/employees')
      const json = await response.json()

      if (response.ok) {
        setEmployees(json)
        if(employees != null)
        setCnt(employees.length)
      }
    }

    fetchEmployees()
  }, [employees])
  return (
    <>
    <div className="List">
      <span className="h1">EmployeeList</span>
      <span className="h2">Total Count :{cnt} <Link to="/EmployeeForm">CreateForm
          </Link></span>
      <div className="employees">
        <div className="head">
            <h4>Unique Id :</h4>
            <h4>Image :</h4>
            <h4>Name :</h4>
            <h4>Email :</h4>
            <h4>Mobile No :</h4>
            <h4>Designation :</h4>
            <h4>Gender :</h4>
            <h4>Course :</h4>
            <p>Created At :</p>
        </div>
        {employees && employees.map(employee => (
          <EmployeeDetails employee={employee} key={employee._id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default EmployeeList