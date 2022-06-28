import { PropTypes } from 'prop-types';

import styles from './styles.module.css';

const Description = ({ username, tag, location, avatar }) => (
  <div className={styles.description}>
    <img src={avatar} alt="User avatar" className="avatar" />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Description.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Description;
