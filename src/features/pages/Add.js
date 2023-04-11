import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { studentAdded } from '../StudentSlice'

const Add = () => {
  const Data=useSelector((state)=>state.students)
  const navi=useNavigate()
  const [added,setAdded]=useState({
    "id":Data.length
  })
  const handleInput=(e)=>{
    setAdded({...added,[e.target.name]:e.target.value})
  }
  const dispatch=useDispatch();
  const handleAdd=()=>{
    if(added.Name && added.Age && added.Course && added.Batch){
      dispatch(studentAdded(added));
      navi('/students')
    }
    else{
      alert('All Fields are Required')
    }
  }
  return (
    <>
    <div className='AddStudent'>
    <div className='nameBox'>
      <label htmlFor='name'>Name:</label>
      <br/>
      <input type='text' name='Name' id='name' placeholder='Enter name' onChange={handleInput}/>
    </div>
    <div className='ageBox'>
      <label htmlFor='age'>Age:</label>
      <br/>
      <input type='number' name='Age' id='age' placeholder='Enter age' onChange={handleInput}/>
    </div>
    <div className='courseBox'>
      <label htmlFor='course'>Course:</label>
      <br/>
      <input type='text' name='Course' id='course' placeholder='Enter course' onChange={handleInput}/>
    </div>
    <div className='batchBox'>
      <label htmlFor='batch'>Batch:</label>
      <br/>
      <input type='text' name='Batch' id='batch' placeholder='Enter batch' onChange={handleInput}/>
    </div>
    </div>
    <div className='btnBox'>
    <button onClick={()=>navi('/students')}>Cancel</button>
    <button onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default Add