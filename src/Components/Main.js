import React, { Component } from 'react';

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

import Dashboard from './Dashboard';
import HomeComponent from '../HomeComponent';

import About from '../AboutComponent';
import Contact from '../ContactPage';
import Teams from '../Teams';
import Services from '../ServiceComponent'; 
import {AuthContext} from '../Contexts/AuthContext';
import LoginForm from './LoginForm';



class Main extends Component
{
  constructor()
  {
    super();
  }

  

  render()
  {
    return(

      <div>

        <AuthContext.Consumer>

          {

          (context)=>{
            console.log(context);
            if(context.user===null)
            return <LoginForm/>


            return ( <div>
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
            <li style={{display:"inline",margin:"50px"}}>{`Hey ${context.user}`}</li>

            <button onClick={()=>context.onLogout()}>Logout</button>
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
            </div>)

          }

        }

        </AuthContext.Consumer>

      </div>

    )

  }
}

export default Main;