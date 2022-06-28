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
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
