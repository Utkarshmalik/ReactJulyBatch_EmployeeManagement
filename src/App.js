import React, { Component } from 'react';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';


const name="Utkarsh";

class App extends Component
{
  constructor()
  {
    super();

    this.state={
      isLoggedIn:false
    }

  }

  onLoginHandle=()=>
  {
    this.setState({isLoggedIn:true})
  }
  
  render()
  {
    return(
      <div>
      {
        (this.state.isLoggedIn)?<Dashboard/>:<LoginForm onLogin={this.onLoginHandle} />
      }
      </div>
    )
  }
}



export default App;