import React, { Component } from 'react';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';


import HomeComponent from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactPage';
import Teams from './Teams';
import Services from './ServiceComponent'; 

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";


const App=()=>
{
  return(
    <Router>
    <div>
    <ul style={{textAlign:"center",margin:"20px"}} >

    <li style={{display:"inline",margin:"50px"}}>
    <Link to="/"> Home </Link>
    </li>
    <li style={{display:"inline",margin:"50px"}}>
    <Link to="/about"> About </Link>
    </li> 

    <li style={{display:"inline",margin:"50px"}}>
    <Link to="/dashboard"> DashBoard </Link>
    </li> 
    <li style={{display:"inline",margin:"50px"}}>
    <Link to="/services"> Services </Link>
    </li> <li style={{display:"inline",margin:"50px"}}>
    <Link to="/team"> Team </Link>
    </li> <li style={{display:"inline",margin:"50px"}}>
    <Link to="/contact"> Contact Us </Link>
    </li>
    </ul>


    <Switch>

    <Route exact path="/">
    <HomeComponent/>
    </Route>

    <Route path="/about">
    <About/>
    </Route>

    <Route path="/dashboard">
    <Dashboard/>
    </Route>

    <Route path="/services">
    <Services/>
    </Route>

    <Route path="/contact">
    <Contact/>
    </Route>

    <Route path="/team">
    <Teams/>
    </Route>

   


    </Switch>

    </div>
    </Router>
  )

}

export default App;





// const name="Utkarsh";

// class App extends Component
// {
//   constructor()
//   {
//     super();

//     this.state={
//       isLoggedIn:false
//     }

//   }

//   static getDerivedStateFromProps()
//   {
//     console.log("I am rendering");
//   }

//   componentWillMount()
//   {
//     console.log("Component is  about to mount"); 
//   }

//   componentWillUnmount()
//   {
//     console.log("Component is  about to unmount"); 
//   }

//   onLoginHandle=()=>
//   {
//     this.setState({isLoggedIn:true})
//   }

//   componentDidMount()
//   {
//     console.log(" Component is mounted");
//   }

//   render()
//   {
//     console.log("I am rendering");

//     return(
//       <div>
//       {
//         (this.state.isLoggedIn)?<Dashboard/>:<LoginForm onLogin={this.onLoginHandle} />
//       }
//       </div>
//     )
//   }
// }



// export default App;