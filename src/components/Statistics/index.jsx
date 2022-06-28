import StatisticsItem from 'components/StatisticsItem';
import React from 'react';
import PropsType from 'prop-types';
import styles from './styles.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <StatisticsItem
          key={stat.id}
          statlabel={stat.label}
          statpercentage={stat.percentage}
        />
      ))}
    </ul>
  </section>
);

Statistics.propsType = {
  title: PropsType.string,
  stats: PropsType.shape({
    id: PropsType.string,
    label: PropsType.string,
    percentage: PropsType.number,
  }),
};

export default Statistics;
