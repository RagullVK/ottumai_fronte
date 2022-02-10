import React from 'react';
import useDetails from './useDetails';
import './PublishDetails.css'

const PublishDetails = () => {
  const {handleChange,values} = useDetails();


  return (
  <div className='form-content-right'>
      <form className='form'>

          <div className='form-inputs'>
              <label htmlFor='community'
               className='form-label'>
                Community: 
              </label>
              <select type='text' 
                    name='community'
                    className='form-input'
                    placeholder='Enter Community From Options Above As Depicted'
                    onChange={handleChange}>
                <option value = 'ACcomm'> African or Caribbean </option>  
                <option value = 'SEAcomm'> East or South East Asain </option>
                <option value = 'Hcomm'> Hispanic </option>
                <option value = 'SAcomm'> South Asain </option>
                <option value = 'SWEcomm'> South West European </option>
              </select>       
          </div>

          <div className='form-inputs'>
              <label htmlFor='address1'
               className='form-label'>
                Address Line 1: 
              </label>
              <input type='text' 
                    name='address1'
                    className='form-input'
                    placeholder='Enter Address Line 1'
                    value={values.address1}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='title'
               className='form-label'>
                Title:
              </label>
              <input type='text' 
                    name='title'
                    className='form-input'
                    placeholder='Enter Event Name'
                    value={values.title}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='address2'
               className='form-label'>
                Address Line 2: 
              </label>
              <input type='text' 
                    name='address2'
                    className='form-input'
                    placeholder='Enter Address Line 2'
                    value={values.address2}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='cost'
               className='form-label'>
                Cost: 
              </label>
              <input type='text' 
                    name='cost'
                    className='form-input'
                    placeholder='Enter Ticket Cost'
                    value={values.cost}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='postcode'
               className='form-label'>
                Postcode: 
              </label>
              <input type='text' 
                    name='postcode'
                    className='form-input'
                    placeholder='Enter Postcode'
                    value={values.postcode}
                    onChange={handleChange}
                    />
          </div>

          
          <div className='form-inputs'>
              <label htmlFor='date'
               className='form-label'>
                Date:  
              </label>
              <input type='text' 
                    name='date'
                    className='form-input'
                    placeholder='Enter Event Date'
                    value={values.date}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='link'
               className='form-label'>
                Link: 
              </label>
              <input type='link' 
                    name='link'
                    className='form-input'
                    placeholder='Enter Link To Purchase Tickets'
                    value={values.link}
                    onChange={handleChange}
                    />
          </div>
          <button className='input-btn'
          type='submit'>
              Publish
          </button>
      </form>
      
  </div>);
};

export default PublishDetails;
