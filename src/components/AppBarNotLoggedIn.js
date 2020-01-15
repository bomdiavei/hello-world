import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import '../css/home-page.css';

export default class AppBarNotLoggedIn extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <ButtonPrimary label="Entrar" type="submit" />
                    <ButtonSecondary label="Cadastrar" type="submit" classname="home-page.nav-button-secondary"/>
                </Toolbar>
            </AppBar>
        );
    }
}