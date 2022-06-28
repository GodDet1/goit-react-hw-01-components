import FriendListItem from 'components/FriendListItem';
import React from 'react';
import { PropTypes } from 'prop-types';

const FriendsList = props => {
  console.log(props);
  return (
    <ul className="friend-list">
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
