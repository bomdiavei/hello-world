import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonComponent from './ButtonComponent';

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
                    <ButtonComponent label="Entrar" color="primary" disableElevation="true"/>
                    <ButtonComponent label="Cadastrar" color="secondary" disableElevation="false"/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
