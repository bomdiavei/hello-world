import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class ButtonPrimary extends Component {
    render(){
        return (
        <Button type={this.props.type} color="inherit">{this.props.label}</Button>                                                                       
        );
    }
}