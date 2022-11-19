import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShowEmpolyees = ({emp}) => {
    // award: '2', desg: 'SE', did: '1', dname: 'SEM', eid: 1
    const navigate =  useNavigate()
    const deleteEmp =(eid)=>{

        axios.delete(`http://localhost:5000/employee/${eid}`).then((resp)=>{
            console.log(resp)
            alert("employeee delete succcess")
            navigate("/")
        })

    } 
    
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title"> EID : {emp.eid} {emp.ename}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">DESG : {emp.desg}</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Awards: {emp.award}</a>
                        <a href="#" className="card-link">DeptName: {emp.dname}</a>
                        <Link to={`/edit/${emp.eid}`} className="card-link">Edit</Link>
                        <button className='btn btn-danger btn-sm' onClick={() => deleteEmp(emp.eid)} >Delete</button>
                    </div>
                </div>
  )
}

export default ShowEmpolyees