import React from "react";

// function Greet(){
//  return(
//     <h1>hello Tushar</h1>
//  )
// }

const Greet = (props) =>{
return(

<h1>hello {props.name}</h1>
)
}

export default Greet;