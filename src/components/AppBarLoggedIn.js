import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonPrimary from './ButtonPrimary';
import Notification from './Notification';
import AvatarIcon from './AvatarIcon';
import ButtonSecondary from './ButtonSecondary';

export default class AppBarLoggedIn extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <ButtonPrimary label="Página Inicial" type="submit" />
                    <Notification badgeContent={1}/>
                    <AvatarIcon label="F"/>
                    <ButtonSecondary label="Publicar" type="submit" />
                </Toolbar>
            </AppBar>
        );
    }
}