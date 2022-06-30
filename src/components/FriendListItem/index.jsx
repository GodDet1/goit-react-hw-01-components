import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const color = isOnline ? 'green' : 'red';

  return (
    <li className={styles.item}>
      <span className={styles.status} style={{ '--color': color }}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
