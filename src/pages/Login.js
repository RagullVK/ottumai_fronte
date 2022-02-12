import React from 'react'
import App from '../App'
import LoginButton from '../components/Login/LoginButton'
import LogoutButton from '../components/Login/LogoutButton'
import {useAuth0} from '@auth0/auth0-react'

function Login () {

  const {isLoading} = useAuth0();

  if (isLoading) return <div className='loading'> Loading... </div>

  return (
    <div className='login'>  
        <LoginButton/>
        <App/>
    </div>
  )
}

export default Login