/* @flow */

import React from 'react';
import styles from './NavUser.stylesheet.css';
import { IndexLink, Link } from 'react-router';

type Props = {
  imgUrl: 'string',
  name: 'string',
  surname: 'string',
  loggedIn: boolean
}

const NavUser = ({ imgUrl, name, surname, loggedIn }: Props) =>
  <button className="btn btn-default navbar-btn navbar-right">
    <Link to={'/logout'} className={styles.link} activeClassName={styles.activeLink}>Log out</Link>
  </button>;

export default NavUser;
