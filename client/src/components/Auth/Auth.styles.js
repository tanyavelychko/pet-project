import {createUseStyles} from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    authContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputWrapper: {
        padding: 10,
    },
  })