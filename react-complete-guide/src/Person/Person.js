import React from 'react';
import './Person.css';

const person = (props)=>{
return (
    <div className='Person'>
        <p onClick={props.click}>I'm {props.name} an I am {props.age} years old</p>
        <div>{props.children}</div>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>);
};

export default person;