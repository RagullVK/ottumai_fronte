import './App.css';
import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import Publish from './pages/Publish';
import MyAccount from './pages/MyAccount'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom' 


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/publish' component={Publish}/>
          <Route path='/MyAccount' component={MyAccount}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
