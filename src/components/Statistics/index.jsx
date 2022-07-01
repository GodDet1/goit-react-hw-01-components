import StatisticsItem from 'components/StatisticsItem';
import React from 'react';
import PropsType from 'prop-types';
import styles from './styles.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem
          key={id}
          statlabel={label}
          statpercentage={percentage}
        />
      ))}
    </ul>
  </section>
);

Statistics.propsType = {
  stats: PropsType.shape({
    id: PropsType.string.isRequired,
    label: PropsType.string.isRequired,
    percentage: PropsType.number.isRequired,
  }),
};

export default Statistics;
