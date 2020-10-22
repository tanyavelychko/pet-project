import React, { useEffect, useState } from 'react';
import { useStyles } from './Calculator.styles';
import InputNumberButton from '../InputNumberButton/InputNumberButton';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

const Calculator = () => {
    const buttons = [
        ['Exit', 'Del', '%'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '+'],
        ['.', '0', '=', '-']
    ];

    const classes = useStyles();
    let history = useHistory();
    let dispatch = useDispatch();

    const renderButtons = () => {
        let layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItem) => {
                return <InputNumberButton
                    key={'btn-' + buttonItem}
                    buttonText={buttonItem}
                    handleOnPress={handleInput}
                />
            });
            return <div className={classes.buttonsRow} key={'row-' + index}>{rowItem}</div>
        });
        return layouts;
    }

    let [displayValue, setDisplayValue] = useState('0');
    let [expressionArray, setExpressionArray] = useState([]);
    let [keepResult, setKeepResult] = useState(true);
    let [operationIndicator, setOperationIndicator] = useState(false);
    let [operator, setOperator] = useState(null);


    /*
    const keyboardInput = (event) => {
        let keyPressed = (event.key).toString();
        handleInput(keyPressed);
    }

    useEffect(() => {
        window.addEventListener('keydown', (event) => keyboardInput(event));
    }, []);
    */
   
    const onExit = () => {
        dispatch({type: 'SET_USER', payload: {name: "", password: ""}}); 
        history.push('/auth');
    }

    const handleInput = (input) => {
        let tempExpressionArray = [];
        let lastIndex;
        let result;
        let tempValue;

        switch(input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                tempValue = displayValue;
                if (tempValue === '0' || !keepResult) {
                    tempValue = '';
                    setExpressionArray([]);
                }

                tempExpressionArray = expressionArray.concat([]);
                lastIndex = tempExpressionArray.length - 1;
                if (operationIndicator || (expressionArray.length === 0)) {
                    tempExpressionArray = expressionArray.concat(input);
                } else {
                    tempExpressionArray[lastIndex] = tempExpressionArray[lastIndex] + input;
                }

                tempValue = tempValue + input;
                setDisplayValue(tempValue);
                setOperator(null);
                setKeepResult(true);
                setOperationIndicator(false);
                setExpressionArray(tempExpressionArray);
                
                break;

            case '.':
                tempValue = displayValue;

                if (tempValue === '0' || !keepResult) {
                    tempValue = '0.';
                    setExpressionArray(['0.']);
                }

                tempExpressionArray = expressionArray.concat([]);
                lastIndex = tempExpressionArray.length - 1;
                let comaExp = /\./;

                if (operationIndicator) {
                    tempExpressionArray = expressionArray.concat('0.');
                    input = '0.'
                } else if (!comaExp.test(tempExpressionArray[lastIndex])) {
                    tempExpressionArray[lastIndex] = tempExpressionArray[lastIndex] + input;
                } else {
                    input = '';
                }

                setOperator(null);
                setDisplayValue(tempValue + input);
                setKeepResult(true);
                setExpressionArray(tempExpressionArray);
                setOperationIndicator(false);
                
                break; 

            case '+':
            case '-':
            case '*':
            case '/':
                tempExpressionArray = expressionArray.concat([]);
                lastIndex = tempExpressionArray.length - 1;
                tempValue = displayValue;

                if (operator !== null) {
                    tempExpressionArray[lastIndex] = input;
                    tempValue = displayValue.substr(0, displayValue.length - 1) + input
                } else {
                    tempExpressionArray = tempExpressionArray.concat(input);
                    tempValue = displayValue + input;
                }

                setOperator(input);
                setKeepResult(true);
                setDisplayValue(tempValue);
                setExpressionArray(tempExpressionArray);
                setOperationIndicator(true);
                
                break;

            case '%':
                tempExpressionArray = expressionArray.concat([]);

                let percents = parseFloat(tempExpressionArray.pop());
                let lastOperator = tempExpressionArray.pop();
                let preResult = eval(tempExpressionArray.join(''));
                
                result = eval(preResult + lastOperator + (preResult/100*percents));

                setDisplayValue(result);
                setExpressionArray([]);
                setKeepResult(false);
                
                break;

            case '=':
                result = eval(expressionArray.join(''));

                setDisplayValue(parseFloat(result.toFixed(8)));
                setExpressionArray([]);
                setKeepResult(false);
                
                break;

            case 'Del':
                setDisplayValue('0');
                setExpressionArray([]);
                
                break;

            case 'Exit':
                onExit();

                break;
        }
    }

    return(
        <div className={classes.calcContainer}>
            <div className={classes.calc}>
                <div className={classes.screen}>
                    <p className={classes.screenText}>{displayValue}</p>
                </div>
                <div className={classes.inputContainer}>
                    {renderButtons()}
                </div>
            </div>           
        </div>             
    );
}

export default Calculator;
