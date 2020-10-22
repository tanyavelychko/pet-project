import React from 'react';
import { useStyles } from './InputNumberButton.styles';

const InputNumberButton = ({buttonText, handleOnPress}) => {
    const classes = useStyles();
    return(
        <div
            className={classes.buttonContainer}
            onClick={() => {handleOnPress(buttonText)}}
        >
            <span
                className={classes.buttonText}
            >
                {buttonText}
            </span>
        </div>
    );
}

export default InputNumberButton;