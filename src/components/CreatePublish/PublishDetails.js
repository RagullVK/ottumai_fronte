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
                ('South Asian',  'African & Caribbean',  'East & South East Asian',  'South West European' or 'Hispanic')
              </label>
              <input type='text' 
                    name='community'
                    className='form-input'
                    placeholder='Enter Community From Options Above As Depicted'
                    value={values.community}
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
                    name='description'
                    className='form-input'
                    placeholder='Enter Link To Purchase Tickets'
                    value={values.description}
                    onChange={handleChange}
                    />
          </div>
          <button className='form-input-btn'
          type='submit'>
              Publish
          </button>
      </form>
      
  </div>);
};

export default PublishDetails;
