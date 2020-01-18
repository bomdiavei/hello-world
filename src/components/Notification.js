import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import Badge from '@material-ui/core/Badge';

export default function SimpleBadge(props) {
  return (
      <Badge badgeContent={props.badgeContent} color="secondary">
        <NotificationsIcon />
      </Badge>
  );
}