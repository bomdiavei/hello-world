import Avatar from '@material-ui/core/Avatar';
import React from 'react';

export default function AvatarIcon(props) {
  return (
    <Avatar>{props.label}</Avatar>  
  );
}