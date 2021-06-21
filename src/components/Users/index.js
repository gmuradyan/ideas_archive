import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../redux/usersSlice'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import styles from './index.module.scss';

const Users = () => {
  const dispatch = useDispatch();
  const { users = {}, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

console.log(users, loading)
    return (
        <div id={styles.user_content}>
          {users.map(user => (
            <ListItem key={user.id} role={undefined} button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText id={1} primary={user.username} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                  <ChevronRightIcon />
                  </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </div>
    );
  }

  export default Users;
