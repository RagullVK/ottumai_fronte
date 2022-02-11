import './App.css';
import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import Publish from './pages/Publish';
import MyAccount from './pages/MyAccount';
import Login from './pages/Login'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom' 
import {useAuth0} from '@auth0/auth0-react'


function App() {

  const {isAuthenticated} = useAuth0(); 

  return (
    isAuthenticated && (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/Home' exact component={Home}/>
          <Route path='/' exact component={Home}/>
          <Route path='/Publish' component={Publish}/>
          <Route path='/MyAccount' component={MyAccount}/>
        </Switch>
      </Router>
    </>
    )
  );
}

export default App;
