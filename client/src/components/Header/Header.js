import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {useStyles} from './Header.styles';


import { useHistory, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ButtonAppBar = () => {
    const classes = useStyles();
    let history = useHistory();
    let currentLocation = useLocation();
    let currentUser = useSelector(store => store.user.name);

    const shouldShowSignUpButton = () => {
        if (!currentUser) {
            if (currentLocation.pathname === '/auth') {
                return(
                    <Button
                        color="inherit"
                        onClick={() => history.push('/registration')}
                    >Sign Up</Button>
                );          
            } else {
                return(
                    <Button
                        color="inherit"
                        onClick={() => history.push('/auth')}
                    >Login</Button>
                );          
            } 
        } else {
            return(
                <Button
                    color="inherit"
                >{currentUser}</Button>
            );        
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Calc
                    </Typography>
                    {shouldShowSignUpButton()}        
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar;
