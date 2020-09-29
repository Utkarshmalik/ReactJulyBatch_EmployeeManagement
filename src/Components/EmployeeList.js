
import React, { Component,useContext } from 'react';
import Card from './card';
import TempComp from './temp';
import {ThemeContext} from '../Contexts/themeContext';


const EmployeeList =(props)=>
{
    const context=useContext(ThemeContext);

       return (
        <div>
        <div>
        <h2>UserName:</h2>
        <h3> Language:{context.language} </h3>
        </div>

          
    <div>
    {
         props.users.map((user)=>
      {
       return <Card key={user.cell} user={user}   />
       })
    }
    </div>

    </div>
    )

}


export default EmployeeList;