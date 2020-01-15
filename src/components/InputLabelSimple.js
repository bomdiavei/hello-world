import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default class InputLabelSimple extends Component {

    render() {

        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">{this.props.inputLabelValue}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.props.value}
                    onChange={this.props.onChange}
                >
                    {this.props.dataFunction}
                </Select>
            </FormControl>
        );
    }
}