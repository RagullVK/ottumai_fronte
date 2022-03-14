import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'

const LoginButton = () => {

  const {loginWithRedirect, isAuthenticated} = useAuth0();  

  return (
    !isAuthenticated && (
      <div className='login-con'>
        <h1 className='bigHeading'>What better way of learning,</h1>
        <h1 className='bigHeading2'>than getting involved?</h1>
        <button onClick = {() => loginWithRedirect()} className='login-btn'>
           Enter Ottumai
        </button>
      </div>  
    )
  )
}

export default LoginButton