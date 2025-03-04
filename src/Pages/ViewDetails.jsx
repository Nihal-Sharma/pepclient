import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";

import { FaLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";

import axios from 'axios';

const ViewDetails = () => {
  const {_id} = useParams()
  const [data , setdata] = useState('')
  useEffect(() => {
    axios.post("https://pep-ishc.onrender.com/api/v1/hospitals/getDetails" , {_id : _id}).then((result)=>{setdata(result.data)})
  } ,[]);

  
  return (
    <div className="view-main">
      <div className="card-view">
        <img src={data.img} className='pic-view'/>

         <div className="bottom">
          
             <text className='name-text'>{data.name}</text><br></br>
             <text className="desc">{data.desc}</text>
             <div className="cont">
             <FaUserDoctor className='loc-icon ' />
             <text className='spec'>{data.spec}</text><br></br>
             <FaLocationDot className='loc-icon gap'/>
             <text className='spec'>{data.city}</text><br></br> 
           
             <text className='rating gap'>Rating : {data.rating}</text><IoStarSharp className='stars'/></div>
             
             <div className="cont">
             <text className="spec-bot">Number of Doctors : {data.noDoctor}</text> <br></br>
             <text className="spec-bot gap">Number of Deptartment : {data.noDepartment}</text>
             </div>
             

             </div>

      </div>
    </div>
  )
}

export default ViewDetails