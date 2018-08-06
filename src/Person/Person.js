
//Importing React here, cos jsx is converted into vanilla js by React
//Precisely via Babel js engine
import React from 'react';

//Import styles
import './Person.css';

//Components are functions that returns some jsx
//props are arguments that allows us to make our component more dynamic
//We just need to give somme attributes to our Person component
//Then invoke them by 
const person = (props) => {

    return (
        <div className='Person'>
        <p onClick={props.click}>{props.name} is {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
    

}

export default person;
