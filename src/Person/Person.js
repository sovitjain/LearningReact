import React from 'react';

const person =  (props) =>  {
   return (
       <div>
            <h1 onClick={props.click}> My name is {props.name}, {props.age}</h1>
            {props.children}
            <input type="text" onChange={props.click1}/>
        </div>
   );
};

export default person; 