import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegAddressCard } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Home = () => {
  const data = {name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  }

  const data2 = [{name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  },{name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  },{name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  },{name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  },
  {name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :6, _id : '2bfghjhjhjhrrfffdfdfdfdfdfdf '
  },
]
  return (
    <div className='home-main'>
    <div className="search">
        <input type="text" className='input-search' placeholder='Search by city'/>
        <button >Search</button>
    </div>
   <div className="cardss">
   {
      data2.map((data)=>
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
  <Link to = {`/update/:${data._id}`}><GrUpdate className='update' /></Link>
  <Link to = {`/addDetails/:${data._id}`}><FaRegAddressCard  className='update' /></Link>
  <Link onClick={()=>{alert("deleted")}}><MdDelete   className='update' /></Link>
  </div>
      )
    }
   </div>
    
    </div>
  )
}

export default Home