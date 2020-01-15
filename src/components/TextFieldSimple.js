import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

export default class TextFieldSimple extends Component {
    render(){
        return ( 
        <TextField id="standard-basic" label={this.props.label}/>                                                                              
        );
    }
}