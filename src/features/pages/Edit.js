import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { studentEdited } from '../StudentSlice';

const Edit = () => {
  const locate=useLocation().state.ind
  console.log(locate);
  const Data=useSelector((state)=>state.students)
  console.log(Data);
  const navi=useNavigate()
  const dispatch=useDispatch()
  const [update]=useState({
    "id":Data[locate].id,
    "Name":Data[locate].Name,
    "Age":Data[locate].Age,
    "Batch":Data[locate].Batch,
    "Course":Data[locate].Course
  })
  const handleChange=(e)=>{
    update[e.target.name]=e.target.value
  }
  const handleSave=()=>{
    console.log(update);
    dispatch(studentEdited(update));
    navi('/students')
  }
  return (
    <>
    <div className='AddStudent'>
    <div className='nameBox'>
      <label htmlFor='name'>Name:</label>
      <br/>
      <input type='text' name='Name' id='name' placeholder={Data[locate].Name} onChange={handleChange}/>
    </div>
    <div className='ageBox'>
      <label htmlFor='age'>Age:</label>
      <br/>
      <input type='number' name='Age' id='age' placeholder={Data[locate].Age} onChange={handleChange}/>
    </div>
    <div className='courseBox'>
      <label htmlFor='course'>Course:</label>
      <br/>
      <input type='text' name='Course' id='course' placeholder={Data[locate].Course} onChange={handleChange}/>
    </div>
    <div className='batchBox'>
      <label htmlFor='batch'>Batch:</label>
      <br/>
      <input type='text' name='Batch' id='batch' placeholder={Data[locate].Batch} onChange={handleChange}/>
    </div>
    </div>
    <div className='btnBox'>
    <button onClick={()=>navi('/students')}>Cancel</button>
    <button onClick={handleSave}>Save</button>
    </div>
    </>
  )
}

export default Edit