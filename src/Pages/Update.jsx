
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import axios from 'axios';
const Update = () => {
  const navigate = useNavigate()
  const [data , setdata] = useState("")
  const {_id} = useParams();
  useEffect(() => {
    axios.post(`https://pep-ishc.onrender.com/api/v1/hospitals/getDetails` , {_id : _id}).then((result)=>{console.log(result.data)
      setName(result.data.name);
      setcity(result.data.city)
      setimg(result.data.img)
      setspec(result.data.spec)

    })
  } ,[]);

  
  const [name, setName] = useState(data.name)
  const [city, setcity] = useState(data.city)
  const [img, setimg] = useState(data.img)
  const [spec , setspec] = useState("")
  const [rating, setRating] = useState(0)


  const onSubmit = ()=>{
    axios.put(`https://pep-ishc.onrender.com/api/v1/hospitals/update?_id=${_id}` , {name , city , img , spec , rating}).then((result)=>{alert("Updated"); navigate("/")})
  }
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () =>console.log(rating)
    const onPointerMove = (value , index ) => console.log(rating)
  
  
    const options = [ '',
      'Pathology', 'Pediatrics', 'Psychiatry', 'Surgery', 'Urology' , "Dermatology"
    ];
    const _onSelect= (option)=>{setspec(option.value)}
    const defaultOption = spec
  return (
    <div className="add-main">
      <div className="inner">
        <div className='header'>Edit Hospital</div>
        <div className="name">
          <text>Hospital Name</text><br></br>
          <input className='input' value={name} onChange={(event)=>{setName(event.target.value)}}/>
        </div>
        
        <div className="name">
          <text>City</text><br></br>
          <input className='input' value={city} onChange={(event)=>{setcity(event.target.value)}}/>
        </div>

        <div className="name">
          <text>Image Link</text><br></br>
          <input className='input' value={img} onChange={(event)=>{setimg(event.target.value)}}/>
        </div>

       <div className='drop'>
       <text>Specialization</text><br></br>
       <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" className='down' /> 
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

export default Update