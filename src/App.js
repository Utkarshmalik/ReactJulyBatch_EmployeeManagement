import React, { Component } from 'react';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner } from 'react-bootstrap';
const name="Utkarsh";

class App extends Component
{
  constructor()
  {
    super();

    this.state={
      loading:true,
      users:[]
    }
  }

  //Life Cycles Mehtods: ComponentDidMount 
  componentDidMount()
  {
    fetch("https://randomuser.me/api/?results=3000")
    .then(data=>data.json())
    .then(data=>
      {
        this.setState({
          loading:false,
          users:data.results 
        })
      }
     )

    console.log("Component is Mounted");
  }


  render()
  {
    console.log("I am rendered");

    return(
      <div style={{textAlign:"center"}} >
       <h1> Basic React App by {name}   </h1>

       {
         (this.state.loading) ? (

          <Spinner animation="grow" />        
         ) :(
          this.state.users.map((user)=>
          {
           return <Card user={user}   />
           })
         )      
      }

    </div> 
    )
  }
}



export default App;