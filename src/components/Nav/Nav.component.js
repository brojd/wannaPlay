/* @flow */

import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Nav.stylesheet.css';

const Nav = () =>
  <div className={styles.Nav}>
    <nav className="navbar navbar-default">
      <IndexLink to={'/'} className="navbar-brand" activeClassName={styles.activeLink}>wannaPlay?!</IndexLink>
      <ul className="nav navbar-nav">
        <li><IndexLink to={'/'} className={styles.link} activeClassName={styles.activeLink}>All Events</IndexLink></li>
        <li><Link to={'/myevents'} className={styles.link} activeClassName={styles.activeLink}>My Events</Link></li>
        <li><Link to={'/places'} className={styles.link} activeClassName={styles.activeLink}>Places</Link></li>
        <li><Link to={'/about'} className={styles.link} activeClassName={styles.activeLink}>About</Link></li>
        <li><Link to={'/logout'} className={styles.link} activeClassName={styles.activeLink}>Log out</Link></li>
      </ul>
    </nav>
  </div>;

export default Nav;
