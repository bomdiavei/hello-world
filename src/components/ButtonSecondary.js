import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class ButtonSecondary extends Component {
    render(){
        return (
        <Button type={this.props.type} variant="contained" color="secondary" disableElevation>{this.props.label}</Button>                                                                      
        );
    }
}