import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowEmpolyees from './ShowEmpolyees';

const Home = () => {
    const [employee, setEmployee] = useState()

    function getEmployees() {
        // axios.defaults.baseURL = 'http://myurl';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get("http://localhost:5000/employees", ).then(resp => setEmployee(resp.data))
    }
   
    useEffect(()=>{
        getEmployees()
    },[])
    // console.log(employee)


    

    return (
        <>
            <h1 className='text-center'>Show Employees</h1>
            <div className="container d-flex  flex-wrap">
            {
                employee?.map((emp)=> <ShowEmpolyees emp={emp}/>)
            }

        </div>
        </>
    )
}

export default Home