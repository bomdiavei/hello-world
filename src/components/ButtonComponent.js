import React from 'react';
import Button from '@material-ui/core/Button';

export default function ContainedButtons(props) {
  return (
      <Button variant={props.variant} color={props.color} onClick={props.onClick}>
        {props.label}
      </Button>   
  );
}
