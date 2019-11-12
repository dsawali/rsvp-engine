import React, { Component } from 'react';
import './FormError.scss';

function ErrorMessage(props) {
    return <span className="error-msg"> {props.message} </span>
};

export default ErrorMessage;