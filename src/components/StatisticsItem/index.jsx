import React from 'react';
import PropsType from 'prop-types';
import styles from './styles.module.css';

const StatisticsItem = ({ statlabel, statpercentage }) => {
  function getRandomHexColor() {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (color.length !== 7) {
      color = getRandomHexColor();
    }
    return color;
  }

  return (
    <li className={styles.item} style={{ '--color': getRandomHexColor() }}>
      <span className={styles.label}>{statlabel}</span>
      <span className={styles.percentage}>{statpercentage} %</span>{' '}
    </li>
  );
};

StatisticsItem.propsType = {
  label: PropsType.string.isRequired,
  percentage: PropsType.number.isRequired,
};

export default StatisticsItem;
