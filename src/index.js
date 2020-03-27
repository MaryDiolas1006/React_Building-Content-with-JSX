// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

 
  
// Create a react component

const App = () => {
    const buttontext = 'Click me'; // javascript variable
    const labelText = 'Enter name:'; // javascript variable
    const labelText2 = 'Email:';
    const labelText3 = 'Password:';
  return (
  <div>
  <label className= "label" htmlFor = "name">
      {labelText} {/*invocating javascript*/}
      </label> 
   <input id ="name" type = "text"></input>
    
      <br></br>
      <br></br>
      <label className ="label" htmlFor = "email">
        {labelText2}
      </label>
       <input id = "email" type = "text"></input>
       <br></br>
       <br></br>
       <label classname = "label" htmlFor= "password">
      {labelText3}
    </label>
  <input id = "password" type = "text"></input>
  <br></br>
   <br></br>
  <button style= {{backgroundColor:"blue", color:"white"}}>
    {buttontext} {/*invocating javascript*/}
</button>
</div> 
  )
}



// Take the react component and show it on the screen
ReactDOM.render(
     <App />,
     document.querySelector('#root')
);