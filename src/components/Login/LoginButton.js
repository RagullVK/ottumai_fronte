import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'

const LoginButton = () => {

  const {loginWithRedirect, isAuthenticated} = useAuth0();  

  return (
    !isAuthenticated && (
      <div className='login-con'>
        <button onClick = {() => loginWithRedirect()} className='login-btn'>
           Sign In
        </button>
      </div>  
    )
  )
}

export default LoginButton