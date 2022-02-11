import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import './Login.css'

const LogoutButton = () => {

  const {logout} = useAuth0();  

  return ( 
    <div className='logout-con'>
      <button onClick={() => logout()} className='logout-btn'>
          Sign Out
      </button>
    </div>  
  )
}

export default LogoutButton