import React, { useState,useEffect } from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import Loader from './Loader';

const Dashboard =()=>
{

  const  {users,usersChange,loading,loadingChange,allUsers,allUsersChange,onInputChange,showEmployeeList}=useDashboardHook();

  
  useEffect( ()=>
  {
    fetch("https://randomuser.me/api/?results=50")
    .then(data=>data.json())
    .then(data=>
      {
        loadingChange(false);
        usersChange(data.results);
        allUsersChange(data.results);
      }
     )
    console.log("Component is Mounted");
  },[])


  return(
            <div  style={{textAlign:"center"}}>
        <div style={{margin:"15px"}} >
        <h1>Employee Dashboard</h1>
        <InputGroup onChange={(e)=>onInputChange(e)}  className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>

        {showEmployeeList()}
        </div>

  )

}

const useDashboardHook=()=>
{

  const [allUsers,allUsersChange]=useState([]);
  const [users,usersChange]=useState([]);
  const [loading,loadingChange]=useState(true);


  const onInputChange=(e)=>
  {

    const searchValue=e.target.value.toLowerCase();


    const result=allUsers.filter((user)=>
    {
      const {name,email,picture}=user;
      const fullName=`${name.title} ${name.first} ${name.last}`
      const isIncluded=fullName.toLowerCase().includes(searchValue);

      if(isIncluded)
      return true;

      return false;
    });

    usersChange(result);
  }

  const showEmployeeList=()=>
  {
      if(loading)
      return <Loader/>

      

      if(users.length)
      return <EmployeeList users={users}/>

      return <div> <h3> OOPS! No Employees Available </h3>   </div>
  }

  return {users,usersChange,loading,loadingChange,allUsers,allUsersChange,onInputChange,showEmployeeList}

}

export default Dashboard;