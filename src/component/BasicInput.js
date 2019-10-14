import React, { Component } from 'react';


const BasicInput = (props) => {
    return (
        <div>
            <input type={props.type} name={props.name} placeholder={props.pholder} />
        </div>
    );
}


export default BasicInput;
