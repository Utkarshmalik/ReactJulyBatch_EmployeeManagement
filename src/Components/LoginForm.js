import React, { Component } from 'react';
import {Form , Button} from 'react-bootstrap';
import { captureRejectionSymbol } from 'events';
import {AuthContext} from '../Contexts/AuthContext';


class LoginForm extends Component
{
  constructor(){

    super();

    this.state={
      userName:""
    }
  }

  onInputChange(e)
  {
    
    console.log(e.target.value);

    this.setState({userName:e.target.value})
  }

 
  render()
  {
    return(

      <AuthContext.Consumer>

        {
          (context)=>
          {

            console.log(context);

            return(

              <div>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control value={this.state.userName} type="email" placeholder="Enter email" onChange={(e)=>this.onInputChange(e)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
  
      <Button onClick={()=>context.onLogin(this.state.userName)} variant="primary" >
        LOGIN
      </Button>
    </Form>
    </div>



            )

          }
        }

      </AuthContext.Consumer>

      


    )
  }



}


export default LoginForm;




