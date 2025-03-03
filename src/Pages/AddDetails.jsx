import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const AddDetails = () => {
  const data = {desc :'Description' , noDoctors : 2, noDepartment : 3}
  const [desc , setdesc] = useState(data.desc)
  const [noDoctors , setnoDoctors] = useState(data.noDoctors)
  const [noDepartment , setnoDepartment] = useState(data.noDepartment)
  const {_id} = useParams();
  return (
    <div className="add-main">
      <div className="inner">
        <div className='header'>Add more Details</div>
        <div className="name">
          <text>Description</text><br></br>
          <input className='input' value={desc} onChange={(event)=>{setdesc(event.target.value)}}/>
        </div>
        
        <div className="name">
          <text>Number of Doctors</text><br></br>
          <input className='input' type='number' value={noDoctors} onChange={(event)=>{setnoDoctors(event.target.value)}}/>
        </div>

        <div className="name">
          <text>Number of Departments</text><br></br>
          <input className='input'type='number' value={noDepartment} onChange={(event)=>{setnoDepartment(event.target.value)}}/>
        </div>

      

      
         
        
      <Link className="submit-but">Update</Link>
      </div>
    </div>
  )
}

export default AddDetails