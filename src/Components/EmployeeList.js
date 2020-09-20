
import React, { Component } from 'react';
import Card from './card';

class EmployeeList extends Component 
{

    constructor()
    {
        super();
    }

    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
    return(
        <div>
        {
          this.props.users.map((user)=>
          {
           return <Card key={user.cell} user={user}   />
           })
        }
        </div>  
    )
}
}

export default EmployeeList;