import axios from 'axios';
import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
const Add = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0)
  const [name,  setName] = useState()
  const [city, setCity] = useState()
  const [spec, setSpec] = useState()
  const [img, setImg] = useState()

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value , index ) => console.log(value, index)


  const options = [ '',
    'Pathology', 'Pediatrics', 'Psychiatry', 'Surgery', 'Urology' , "Dermatology"
  ];
  
  const defaultOption = options[0]


  const onSubmit = async()=>{
 try{
  await axios.post("https://pep-ishc.onrender.com/api/v1/hospitals/create" , {name , city , spec , img, rating})
 }
 catch(err){
  console.log(err)
 }
 alert("Created")
 navigate('/')
  }
  return (
    <div className="add-main">
      <div className="inner">
        <div className='header'>Add New Hospital</div>
        <div className="name">
          <text>Hospital Name</text><br></br>
          <input className='input' onChange={(event)=>{setName(event.target.value)}}/>
        </div>
        
        <div className="name">
          <text>City</text><br></br>
          <input className='input' onChange={(event)=>{setCity(event.target.value)}}/>
        </div>

        <div className="name">
          <text>Image Link</text><br></br>
          <input className='input' onChange={(event)=>{setImg(event.target.value)}}/>
        </div>

       <div className='drop'>
       <text>Specialization</text><br></br>
       <Dropdown options={options} onChange={(option)=>{setSpec(option.value)}} value={defaultOption} placeholder="Select an option" className='down' /> 
       </div>

       <div className="name" >
          <text>Rating</text><br></br>
          <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
        </div>
      <Link className="submit-but" onClick={onSubmit}>Submit</Link>
      </div>
    </div>
  )
}

export default Add