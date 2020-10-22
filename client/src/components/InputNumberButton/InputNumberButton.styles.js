import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    buttonContainer: {
        flex: 1,
        margin: 1,
        backgroundColor: '#3f51b5',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        padding: 10
    },
    buttonText: {
        fontSize: 35,
        textAlignVertical: 'center',
        color: 'white',
        position: 'relative'
    }
  });