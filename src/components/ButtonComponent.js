import React from 'react';
import Button from '@material-ui/core/Button';

export default function ContainedButtons(props) {
  return (
      <Button type="submit" variant="contained" color={props.color} disableElevation={props.disableElevation}>
        {props.label}
      </Button>   
  );
}
