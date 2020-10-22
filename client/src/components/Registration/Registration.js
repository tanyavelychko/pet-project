import React, { useState } from 'react';
import { useStyles } from './Registration.styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Registration = () => {
    const classes = useStyles();
    const [localUsername, setUsername] = useState('');
    const [localPassword, setPassword] = useState('');
    
    let history = useHistory();

    const handleRegistration = () => {
        axios.post('/register', {
            username: localUsername,
            password: localPassword
        })
        .then(function(response) {
            alert(response.data.message);
            history.push('/auth');
        })
        .catch(function(error) {
            alert(error.response.data.errorMessage);
        })
    }
    
    return(
        <React.Fragment>
            <div className={classes.registrationForm}>
                <div className={classes.inputs}>
                    <div className={classes.inputWrapper}>
                        <TextField
                            className={classes.root}
                            label="Username"
                            variant="outlined"
                            value={localUsername}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <TextField
                            className={classes.root}
                            label="Password"
                            variant="outlined"
                            value={localPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'   
                        />
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.registerButton}
                    onClick={handleRegistration}
                >
                    <p className={classes.registerText}>Sign Up</p>
                </Button>
            </div>
        </React.Fragment>
    );
} 

export default Registration;