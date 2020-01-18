import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonComponent from './ButtonComponent';
import Notification from './Notification';
import AvatarIcon from './AvatarIcon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    components: {
        '& > *': {
          margin: theme.spacing(1),
        },
        display: "flex",
        justifyContent: "flex-end",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.components}>
                    <ButtonComponent label="Página Inicial" color="primary" disableElevation="true"/>
                    <Notification badgeContent={1}/>
                    <AvatarIcon label="F"/>
                    <ButtonComponent label="Publicar" color="secondary" disableElevation="false"/>
                </Toolbar>
            </AppBar>
        </div>
    );
}