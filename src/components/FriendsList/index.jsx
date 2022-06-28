import FriendListItem from 'components/FriendListItem';
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
