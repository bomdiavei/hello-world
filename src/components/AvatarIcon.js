import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function AvatarIcon(props) {
  const classes = useStyles();
  const isSmall = () => {
      if ("small" === props.size) {
          return <Avatar className={classes.small} src={props.src}/>;
      }
      return <Avatar src={props.src}/>;
  };

  return (
    <div>{isSmall()}</div>    
  );
}