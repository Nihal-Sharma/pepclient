import React from 'react'
import { useParams } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegAddressCard } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ViewDetails = () => {
  const data = {name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr', desc :'Lorem ipsum is the to tha sdsd dsdsd s dsd sd s s dsdsds sds d sd  s ds d s d sd sd s d sd sds d sd s  dsd s d sd s ds d sd s d sdsdsds  s d sd sd s d sd.',noDoctors : 2, noDepartment : 3
  }
  const {_id} = useParams()
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
             <text className="spec-bot">Number of Doctors : {data.noDoctors}</text> <br></br>
             <text className="spec-bot gap">Number of Deptartment : {data.noDepartment}</text>
             </div>
             

             </div>

      </div>
    </div>
  )
}

export default ViewDetails