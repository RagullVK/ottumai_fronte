import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

function TrackingForm(props) {
  
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  });

  const toChange = e => {
      setInput(e.target.value);
  }
 
  const [id,setId] =useState(0)
  const giveId=()=> {
    setId(id+1)
    return id
  }
  const toSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: giveId(),
        text: input
    });
    setInput('');
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
              value={input}
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
              value={input}
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
