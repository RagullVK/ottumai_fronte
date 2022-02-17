import React, { useState } from 'react';
import './PublishDetails.css'
import Axios from 'axios';

const PublishDetails = () => {

  const [community, setCommunity] = useState('');
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [addi1, setAddi1] = useState('');
  const [addi2, setAddi2] = useState('');
  const [pobox, setPobox] = useState('');
  const [link, setLink] = useState('');

  const [eventList, setEventList] = useState([]);

  const addEvent = () => {
    Axios.post('http://localhost:3001/create', {
      community: community,
      title: title,
      cost: cost,
      date: date,
      addi1: addi1,
      addi2: addi2,
      pobox: pobox,
      link: link,
    }).then (() => {
      setEventList([
        ...eventList,
        {
          community: community,
          title: title,
          cost: cost,
          date: date,
          addi1: addi1,
          addi2: addi2,
          pobox: pobox,
          link: link,
        },
      ])
    })
  }

  return (
  <div className='form-content-right'>
      <form className='form'>

          <div className='form-inputs'>
              <label className='form-label'>
                Community: 
              </label>
              <select type='text' 
                    className='form-input'
                    placeholder='Enter Community From Options Above As Depicted'
                    onChange={(event) => {
                      setCommunity(event.target.value);
                    }}>
                <option disabled selected hidden>Select The Relevant Community</option>     
                <option> African or Caribbean </option>  
                <option> East or South East Asian </option>
                <option> Hispanic </option>
                <option> South Asian </option>
                <option> South West European </option>
              </select>       
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Address Line 1: 
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Address Line 1'
                    onChange={(event) => {
                      setAddi1(event.target.value);
                    }}
                    />
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Title:
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Event Name'
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    />
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Address Line 2: 
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Address Line 2'
                    onChange={(event) => {
                      setAddi2(event.target.value);
                    }}
                    />
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Cost: 
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Ticket Cost'
                    onChange={(event) => {
                      setCost(event.target.value);
                    }}
                    />
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Postcode: 
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Postcode'
                    onChange={(event) => {
                      setPobox(event.target.value);
                    }}
                    />
          </div>

          
          <div className='form-inputs'>
              <label className='form-label'>
                Date:  
              </label>
              <input type='text' 
                    className='form-input'
                    placeholder='Enter Event Date'
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                    />
          </div>

          <div className='form-inputs'>
              <label className='form-label'>
                Link: 
              </label>
              <input type='link' 
                    className='form-input'
                    placeholder='Enter Link To Purchase Tickets'
                    onChange={(event) => {
                      setLink(event.target.value);
                    }}
                    />
          </div>
          <button onClick = {addEvent} className='input-btn'
          type='submit'>
              Publish
          </button>
      </form>
      
  </div>);
};

export default PublishDetails;
