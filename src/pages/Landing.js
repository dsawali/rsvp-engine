import React, { Component } from 'react';

import Button from '../component/Button';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const signupText = 'Sign up';
        const signInText = 'Sign in';
        return(
            <div>
                <div>
                    <Button text={signupText} />
                </div>
                <div>
                    <Button text={signInText} />
                </div>
            </div>
        );
    }
}

export default Landing;