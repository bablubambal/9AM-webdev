
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const navigate =  useNavigate()
    let initialState = {
        "id":"",
        "name":"",
        "desg":"",
        "did":0,
        "dname":"",
        "award":0,
        "salary":1000,
        "skills":""
    }
    const[formData,setFormData] = useState(initialState)
    
    
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name] :e.target.value})
    
    }

    function addEmployee(){
        console.log("funciton works")
        // console.log(formData)

        axios.post("http://localhost:5000/employees",formData).then((resp)=>
        {
console.log("success")
alert("Employee addded success")
navigate("/")
        }
        )
        console.log("success")

    }

  return (
    <>
    <h1 className="text-center">Add an Employee</h1>
    <div className="container mt-4">
        
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='id'
              value={formData.id}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="Employee ID" />
            <label for="floatingInput">Employee Id</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="name" />
            <label for="floatingInput">EmpName</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='desg'
              value={formData.desg}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="name" />
            <label for="floatingInput">Emp Designation</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='dname'
              value={formData.dname}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="Price" />
            <label for="floatingInput">Dept Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='skills'
              value={formData.skills}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="Price" />
            <label for="floatingInput">Skills of employee</label>
          </div>
          <div className="form-floating mb-3">
            <button onClick={addEmployee}>Add Employeee</button>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default AddEmployee









 