import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0),
    width: 370,
  },
}));

export default function InputWithIcon(props) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label={props.label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
