/* @flow */

import React from 'react';
import styles from './NavUser.stylesheet.css';
import { IndexLink, Link } from 'react-router';

type Props = {
  imgUrl: string,
  name: string,
  surname: string
}

const NavUser = ({ imgUrl, name, surname }: Props) =>
  <span className="navbar-right">
    <span className="navbar-text">Hello {name} {surname}</span>
    <button className="btn btn-default navbar-btn">
      <Link to={'/logout'} className={styles.link} activeClassName={styles.activeLink}>Log out</Link>
    </button>
  </span>
  ;

export default NavUser;
