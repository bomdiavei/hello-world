import React from 'react';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

export default function ContainedButtons(props) {
  const getIcon = () => {
    if ("CommentIcon" === props.icon) {
      return  <Button startIcon={<CommentIcon />} variant={props.variant} color={props.color} onClick={props.onClick}>
                {props.label}
              </Button>;
    }
    if ("ShareIcon" === props.icon) {
      return  <Button startIcon={<ShareIcon />} variant={props.variant} color={props.color} onClick={props.onClick}>
                {props.label}
              </Button>;
    }
    return  <Button variant={props.variant} color={props.color} onClick={props.onClick}>
              {props.label}
            </Button>;
  };

  return (
    <div>{getIcon()}</div>    
  );
}
