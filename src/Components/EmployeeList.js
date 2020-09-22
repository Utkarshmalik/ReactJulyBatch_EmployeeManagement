
import React, { Component } from 'react';
import Card from './card';
import TempComp from './temp';

import {ThemeContext} from '../Contexts/themeContext';


class EmployeeList extends Component 
{

    constructor(props)
    {
        super();
    }

    shouldComponentUpdate()
    {
        return false;
    }

    static contextType=ThemeContext;

    render()
    {
        console.log(this.context);
    return(
        <TempComp>
        <div>
        {

          this.props.users.map((user)=>
          {
           return <Card key={user.cell} user={user}   />
           })
        }
        </div> 
        </TempComp> 
    )
}
}

export default EmployeeList;