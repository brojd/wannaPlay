/* @flow */

import React from 'react';
import spinner from './spinner.gif';
import styles from './Loading.stylesheet.css';

const Loading = () => {
  return (
    <img src={spinner} alt='spinner' className={styles.Loading} />
  )
};

export default Loading;