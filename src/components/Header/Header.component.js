/* @flow */

import React from 'react';
import styles from './Header.stylesheet.css';
import Nav from '../Nav/Nav.component';

const Header = () =>
  <header className={styles.Header}>
    <Nav/>
  </header>;

export default Header;
