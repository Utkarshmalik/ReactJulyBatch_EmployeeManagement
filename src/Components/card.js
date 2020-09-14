import React from 'react';

const avatar=require("../Components/avatar.png")

const Card=()=>
{
    return(
    <div style={ {border:"3px solid red" ,textAlign:"center"  } }  >
    <img src={avatar}   />
    <h3> My Name </h3>
    <h4> Software Developer </h4>
    </div>
    )
}


export default Card;