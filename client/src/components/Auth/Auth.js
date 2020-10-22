import React, { useState } from 'react';
import { useStyles } from './Auth.styles';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    
    const classes = useStyles();
    
    const [localUsername, setUsername] = useState('');
    const [localPassword, setPassword] = useState('');
    
    let history = useHistory();

    const handleLogin = () => {
        axios.post('/login', {
            username: localUsername,
            password: localPassword
        })
        .then(function(response) {
            dispatch({type: 'SET_USER', payload: {name: localUsername, password: localPassword}});
            history.push('/calculator');
        })
        .catch(function(error) {
            alert(error.response.data.errorMessage);
        })
    }
    
    return (
        <React.Fragment>
            <div className={classes.authContainer}>
                    <div className={classes.credentialsInput} key='credentialsInput'>
                        <div className={classes.inputWrapper}>
                            <TextField
                                className={classes.root} 
                                label="Username"
                                variant="outlined"
                                value={localUsername}
                                onChange={(e) => setUsername(e.target.value)}
                                fullWidth
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
                        className={classes.loginButton}
                        onClick={handleLogin}
                    >
                        <p className={classes.loginText}>Login</p>
                    </Button>                            
                </div> 
        </React.Fragment>
        
    );
}

export default Auth;