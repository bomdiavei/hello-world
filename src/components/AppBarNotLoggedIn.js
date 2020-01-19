import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogIn from './LogIn';
import SignUp from './SignUp';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    components: {
        '& > *': {
          margin: theme.spacing(1),
        },
        display: "flex",
        justifyContent: "flex-end"
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.components}>
                    <LogIn />
                    <SignUp />
                </Toolbar>
            </AppBar>
        </div>
    );
}
