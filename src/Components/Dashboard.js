import React, { Component } from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import Loader from './Loader';

class Dashboard extends Component
{
    constructor()
    {
        super();

        this.state={
            users:[],
            loading:true
        }
    }

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


    showEmployeeList()
    {
        if(this.state.loading)
        return <Loader/>

        return <EmployeeList users={this.state.users}/>
    }

    render()
    {    
    return(
        <div  style={{textAlign:"center"}}>
        <div style={{margin:"15px"}} >
        <h1>Employee Dashboard</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>

        {this.showEmployeeList()}
        </div>
    )
}
}

export default Dashboard;