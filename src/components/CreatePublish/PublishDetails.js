import React from 'react';
import useDetails from './useDetails';

const PublishDetails = () => {
  const {handleChange,values} = useDetails();


  return (
  <div className='form-content-right'>
      <form className='form'>

          <div className='form-inputs'>
              <label htmlFor='community'
               className='form-label'>
                Community
              </label>
              <input type='text' 
                    name='community'
                    className='form-input'
                    placeholder='Enter Target Community'
                    value={values.community}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='title'
               className='form-label'>
                Title
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
              <label htmlFor='description'
               className='form-label'>
                Description 
              </label>
              <input type='text' 
                    name='description'
                    className='form-input'
                    placeholder='Enter Event Description'
                    value={values.description}
                    onChange={handleChange}
                    />
          </div>

          <div className='form-inputs'>
              <label htmlFor='cost'
               className='form-label'>
                Cost 
              </label>
              <input type='text' 
                    name='cost'
                    className='form-input'
                    placeholder='Enter Ticket cost'
                    value={values.cost}
                    onChange={handleChange}
                    />
          </div>
          
          <div className='form-inputs'>
              <label htmlFor='date'
               className='form-label'>
                Date   
              </label>
              <input type='text' 
                    name='date'
                    className='form-input'
                    placeholder='Enter Event Date'
                    value={values.date}
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
