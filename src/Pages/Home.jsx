import React, { useEffect, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegAddressCard } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
const Home = () => {
  const [data1 , setdata] = useState("")
  const[search , setSearch] = useState()
  const deleteDoc = (_id) =>{
      axios.delete(`https://pep-ishc.onrender.com/api/v1/hospitals/delete?_id=${_id}`).then((result)=>{alert("Please refresh")})
  }
  useEffect(() => {
    axios.get("https://pep-ishc.onrender.com/api/v1/hospitals/getAll").then((result)=>{setdata(result.data); console.log(result.data[0])})
  } ,[]);

  const onSearch=()=>{
    axios.get(`https://pep-ishc.onrender.com/api/v1/hospitals?city=${search}`).then((result)=>{setdata(result.data)})
  }
 
  if(data1 != ""){
    return (
      <div className='home-main'>
      <div className="search">
          <input type="text" className='input-search' placeholder='Search by city' value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
          <button onClick={onSearch} >Search</button>
      </div>
     <div className="cardss">
     {
    
        data1.map((data)=>
          <div className="card">
        <img src={data.img} className='pic'/>
        <div className="bottom">
        <text className='name-text'>{data.name}</text><br></br>
        <FaUserDoctor className='loc-icon' />
        <text className='spec'>{data.spec}</text><br></br>
        <FaLocationDot className='loc-icon'/>
        <text className='spec'>{data.city}</text><br></br> 
      
        <text className='rating'>Rating : {data.rating}</text><IoStarSharp className='stars'/>
        
        </div>
       
      
    <Link className='view' to={`/viewDetails/${data._id}`}>View Details</Link>
    <Link to = {`/update/${data._id}`}><GrUpdate className='update' /></Link>
    <Link to = {`/addDetails/${data._id}`}><FaRegAddressCard  className='update' /></Link>
    <Link onClick={()=>{deleteDoc(data._id)}}><MdDelete   className='update' /></Link>
    </div>
        )
      }
     </div>
      
      </div>
    )
  }
  else {
    return(
      <div className='home-main'>No Data</div>
    )
  }
}

  


export default Home