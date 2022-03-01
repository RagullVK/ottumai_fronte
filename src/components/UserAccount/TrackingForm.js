import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Axios from 'axios';

function TrackingForm(props) {
  
  const [title2, setTitle2] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  });

  const toChange = e => {
      setTitle2(e.target.value);
  }
 
  const [tracking, setTracking] = useState([]);
  const [id,setId] =useState(0)

  const getTracking = () => {
    Axios.get('http://localhost:3001/tracking').then((response) => {
       setTracking(response.data);
    });
  }
  
  const giveId=()=> {
  return (
    <div>
      {getTracking}
      {
        tracking.map((card) => {
          return (<a key={card.id}/>)
        })
      }
    </div>
  )
  }


  const toSubmit = e => {
    e.preventDefault();
    Axios.post('http://localhost:3001/createtracking', {
      title2: title2,
    }).then (() => {
      setTracking([
        ...tracking,
        {
          title2: title2,
        },
      ])
    })

    props.onSubmit({
        text: title2,
        id: giveId
    });
    setTitle2('');
  }

    return (
  <form className='tracking-form' onSubmit={toSubmit}>
      {props.edit ? (
          <>
            <input
              type='text'
              name='text'
              className='tracking-input'
              placeholder='Update Tracking'
              value={title2}
              onChange={toChange}
              ref={inputRef}
            />
            <button onClick={toSubmit} className='tracking-btn'>Update</button>
          </>
      ) : (
          <>
            <input
              type='text'
              name='text'
              className='tracking-input'
              placeholder='Enter Reminder to Track'
              value={title2}
              onChange={toChange}
              ref={inputRef}  
            />
            <button onClick={toSubmit} className='tracking-btn'>Track</button>
          </>    
      )}
  </form>
  );
}

export default TrackingForm;
