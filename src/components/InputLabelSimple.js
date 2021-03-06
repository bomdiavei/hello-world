import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 370,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function InputLabelSimple(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };  
  const valueFunction = props.valueData.map((value) =>
  <MenuItem key={value.value} value={value.value}>{value.name}</MenuItem>
);

  return (
    <div>
      <FormControl className={classes.formControl}>
  <InputLabel id="demo-simple-select-helper-label">{props.inputLabelValue}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={handleChange}
        >
          {valueFunction}
        </Select>
      </FormControl>
    </div>
  );
}
