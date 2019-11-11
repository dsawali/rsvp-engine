import validator from 'validator';

const errorStrings = {
    firstName: {
        noNumeric: 'First name can only contain alphabetic characters'
    }
}

const validation = {
    firstname: (value) => {
        let errors = [];
        if(!validator.isAlpha(value)) {
            if(!errors.includes(errorStrings.firstName.noNumeric)) {
                errors.push(errorStrings.firstName.noNumeric);
            }
        }
        if(validator.isEmpty(value)) {
            errors = [];
        }
        return errors;
    },
    lastname: (value) => {
        let errors = [];
        if(!validator.isAlpha(value)) {
            errors.push('Last name can only contain alphabetic characters');
        }
        if(validator.isEmpty(value)) {
            errors = [];
        }
        return errors;
    },
    email: (value) => {
        let errors = [];
        if(!validator.isEmail(value)) {
            errors.push('Please enter a valid email');
        }
        if(validator.isEmpty(value)) {
            errors = [];
        }
        return errors;
    },
    password: (value) => {
        let errors = [];
        if(value.length < 8) {
            errors.push('Password has to be 8 characters minimum');
        }
        if(!value.match(/[a-z]/)) {
            errors.push('Password must have at least 1 lowercase')
        }
        if(!value.match(/[A-Z]/)) {
            errors.push('Password must have at least 1 uppercase')
        }
        if(!value.match(/\d+/g)) {
            errors.push('Password must have at least 1 numerical value');
        }
        if(validator.isEmpty(value)) {
            errors = [];
        }
        return errors;
    },
    confirmPassword: (value1, value2) => {
        let errors = [];
        if(value1 !== value2) {
            errors.push('Password must match');
        }
        return errors;
    }
}

export default validation;