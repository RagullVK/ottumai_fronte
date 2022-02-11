import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function AccountDetails() {

  const {user} = useAuth0();
    
  return (
    <div className='details-content'>
        <div className='form-inputs'>
            <label htmlFor='username'
               className='form-label'>
                Username: 
            </label>
            <p type='text' name='username' className='form-display'>
                {user.nickname}
            </p>
        </div>

        <div className='form-inputs'>
            <label htmlFor='email'
               className='form-label'>
                Email: 
            </label>
            <p type='text' name='email' className='form-display'>
                {user.email}
            </p>
        </div>
    </div>
  )
}

export default AccountDetails
