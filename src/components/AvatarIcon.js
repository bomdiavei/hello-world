import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';

export default class AvatarIcon extends Component {
    render(){
        return (
        <Avatar>{this.props.label}</Avatar>                                                                     
        );
    }
}