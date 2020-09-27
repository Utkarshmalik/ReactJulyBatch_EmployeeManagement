import React, { Component } from 'react';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

import ThemeContextProvider from './Contexts/themeContext';
import AuthContextProvider from './Contexts/AuthContext';
import MainScreen from './Components/Main';

const App=()=>
{
  return(
    <Router>
      <AuthContextProvider>
    <ThemeContextProvider>
      <MainScreen/>
    </ThemeContextProvider>
    </AuthContextProvider>
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