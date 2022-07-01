import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

function SocialItem({ name, count }) {
  return (
    <li>
      <span className={styles.label}>{name}</span>
      <span className={styles.quantity}>{count}</span>
    </li>
  );
}

SocialItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default SocialItem;
