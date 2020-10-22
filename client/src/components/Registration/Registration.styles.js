import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    registrationForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputWrapper: {
        padding: 10,
    },
    inputs: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '80%',
        height: '4vh',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        border: '1px solid #677173',
        borderRadius: 2,
    },
    registerButton: {
        alignSelf: 'center',
        marginTop: 30,
        height: '5vh',
        backgroundColor: '#0C97B3',
        border: '1px solid #677173',
        borderRadius: 2,
    },
    registerText: {
        flex: 1,
        color: '#222233',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        margin: 10,
    }

  });