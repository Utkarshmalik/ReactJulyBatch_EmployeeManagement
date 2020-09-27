
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

    render()
    {
    return(
        <TempComp>

            <ThemeContext.Consumer>
                {
                    (context)=>
                    {

                        console.log(context);

                        return (<div>
                            <h2>UserName:</h2>
                            <h3> Language:{context.language} </h3></div>);

                    }

                }

            </ThemeContext.Consumer>

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