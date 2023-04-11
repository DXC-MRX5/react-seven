import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Students = () => {
  const navi=useNavigate()
  const Data=useSelector((state)=>state.students)
  return (
    <div className='Students'>
      <div className='heading'>
        <h1>Students Details</h1>
        <button onClick={()=>{navi('/add')}}>Add new Student</button>
      </div>
      <div className='table-cntnr'>
            <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((info,ind)=>{
                  return(
                    <tr key={ind}>
                      <td>{info.Name}</td>
                      <td>{info.Age}</td>
                      <td>{info.Course}</td>
                      <td>{info.Batch}</td>
                      <td><Link to='/edit' state={{ind}} className='editLink'>Edit</Link></td>
                    </tr>
                  )
                })}
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Students