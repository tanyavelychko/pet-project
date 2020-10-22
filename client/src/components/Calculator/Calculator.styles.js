import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    calcContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    calc: {
        flexDirection: 'column',
        marginTop: '10vh',
        width: '30%',
        justifyContent: 'center',
        border: 'solid'    
    },  
    screen: {
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        //marginTop: '10vh'        
    },
    screenText: {
        color: '#001817',
        textAlign: 'right',
        fontSize: 50,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginRight: '1vh',
        marginTop: 0
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#93A0A3',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    buttonsRow: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    }
  });