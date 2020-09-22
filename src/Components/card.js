import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link,useRouteMatch,Switch,Route} from 'react-router-dom';
import Temp from './temp';
const avatar=require("../Components/avatar.png")


const CardComponent=(props)=>
{
    console.log(props);
    const {name,email,picture}=props.user;

    const fullName=`${name.title} ${name.first} ${name.last}`

      let match=useRouteMatch();
        console.log(match.url);
    
    return(
        <div style={{display:"inline-block",margin:"20px",padding:"10px"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture.large} />
        <Card.Body>
          <Card.Title> {fullName}</Card.Title>
          <Card.Text>
         {email}
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
   
    )
}


export default CardComponent;