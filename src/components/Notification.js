import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default class Notification extends Component {
    render() {
        return (
            <Badge badgeContent={this.props.badgeContent} color="secondary">
                <NotificationsIcon />
            </Badge>                                                                       
        );
    }
}