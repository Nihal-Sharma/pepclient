import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
const AddDetails = () => {
  const data = {desc :'Description' , noDoctors : 2, noDepartment : 3}
const navigate = useNavigate();
  useEffect(() => {
    axios.post(`https://pep-ishc.onrender.com/api/v1/hospitals/getDetails` , {_id : _id}).then((result)=>{console.log(result.data)
      setdesc(result.data.desc);
      setnoDoctors(result.data.noDoctor)
      setnoDepartment(result.data.noDepartment)
      

    })
  } ,[]);

  
    const onSubmit = ()=>{
      axios.post(`https://pep-ishc.onrender.com/api/v1/hospitals/details?_id=${_id}` , {desc , noDoctor : noDoctors , noDepartment}).then((result)=>{alert("Updated"); navigate("/")})
    }
    
  

  const [desc , setdesc] = useState("")
  const [noDoctors , setnoDoctors] = useState(0)
  const [noDepartment , setnoDepartment] = useState(0)
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

      

      
         
        
      <Link className="submit-but" onClick={onSubmit}>Update</Link>
      </div>
    </div>
  )
}

export default AddDetails