import React from 'react';
import Card from './Components/card';

const users=[1,2,3,4,5];




const name="Utkarsh";
const App=()=>
{
  return(
    <div>
    <h1> Basic React App by {name}

    {
      
      users.map((user)=>
      {
        return <Card/>
      })

    }


    </h1>
    </div>
  )

}


export default App;