import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
const Add = () => {
  
  const [rating, setRating] = useState(0)

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
  const _onSelect= ()=>{}
  const defaultOption = options[0]
  return (
    <div className="add-main">
      <div className="inner">
        <div className='header'>Add New Hospital</div>
        <div className="name">
          <text>Hospital Name</text><br></br>
          <input className='input'/>
        </div>
        
        <div className="name">
          <text>City</text><br></br>
          <input className='input'/>
        </div>

        <div className="name">
          <text>Image Link</text><br></br>
          <input className='input'/>
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

export default Add