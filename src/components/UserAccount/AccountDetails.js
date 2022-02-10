import React from 'react'

function AccountDetails() {
  return (
    <div className='details-content'>
        <div className='form-inputs'>
            <label htmlFor='username'
               className='form-label'>
                Username: 
            </label>
            <p type='text' name='username' className='form-display'>
                NameSomething123
            </p>
        </div>

        <div className='form-inputs'>
            <label htmlFor='email'
               className='form-label'>
                Email: 
            </label>
            <p type='text' name='email' className='form-display'>
                Name@outlook.com
            </p>
        </div>

        <div className='form-inputs'>
            <label htmlFor='password'
               className='form-label'>
                Password: 
            </label>
            <p type='text' name='password' className='form-display'>
                *********
            </p>
        </div>

    </div>
  )
}

export default AccountDetails
