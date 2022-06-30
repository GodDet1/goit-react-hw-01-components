import { PropTypes } from 'prop-types';
import Description from '../Description';
import SocialList from '../SocialList';
import styles from './styles.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <SocialList stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
