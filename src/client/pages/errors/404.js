import React, { Component } from 'react';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

function notFound404(props) {
    return <h1>Whoops! We can't find the page you're looking for</h1>;
};

export default notFound404;