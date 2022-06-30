import SocialItem from '../SocialItem';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

const SocialList = ({ stats }) => {
  const statsName = Object.keys(stats);

  return (
    <ul className={styles.stats}>
      {statsName.map(name => (
        <SocialItem
          key={statsName.indexOf(name)}
          name={name}
          count={stats[name]}
        />
      ))}
    </ul>
  );
};

SocialList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default SocialList;
