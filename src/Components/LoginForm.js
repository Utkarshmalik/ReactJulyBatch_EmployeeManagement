import React, { useState,useContext } from 'react';
import {Form , Button} from 'react-bootstrap';
import { captureRejectionSymbol } from 'events';
import {AuthContext} from '../Contexts/AuthContext';



const LoginForm=()=>
{

  const {userName,changeUserName,onInputChange,AuthcontextValue} = useLoginHook();


  return(
          <div>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control value={userName} type="email" placeholder="Enter email" onChange={(e)=>onInputChange(e)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button onClick={()=>AuthcontextValue.onLogin(userName)} variant="primary" >
            LOGIN
          </Button>
        </Form>
        </div>            
  )
}

const useLoginHook =()=>
{

const [userName,changeUserName] =   useState("");

const onInputChange=(e)=>
{
changeUserName(e.target.value);
}

const AuthcontextValue=useContext(AuthContext);

return {userName,changeUserName,onInputChange,AuthcontextValue};

}


export default LoginForm;




