
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
const Update = () => {
  const {_id} = useParams();
  const data = {name : 'Ivy Hospital' , city: 'Hoshiarpur' , img :'https://media.istockphoto.com/id/1419877131/photo/building-facade-of-a-hospital-in-commercial-and-business-district-under-blue-sky.jpg?s=612x612&w=0&k=20&c=wGxVbFSxljSZb_t_qROE4RwsCgssKbGlqawAtmQ88Ls=' , spec :'Neurologist'
    , rating :3, _id : '2bfghjhjhjhrrr'
  }
  const [name, setName] = useState(data.name)
  const [city, setcity] = useState(data.city)
  const [img, setimg] = useState(data.img)
  const [spec , setspec] = useState(data.spec)
  const [rating, setRating] = useState(0)
  
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
    const defaultOption = data.spec
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
      <Link className="submit-but">Submit</Link>
      </div>
    </div>
  )
}

export default Update