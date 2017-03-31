/* @flow */

import React from 'react';
import styles from './ChooseLocation.stylesheet.css';

type Props = {
  currentLocation: string,
  allLocations: Array<string>,
  onLocationChosen: Function
}

const ChooseLocation = ({ currentLocation, allLocations, onLocationChosen }: Props) => {
  return (
    <select className={styles.ChooseLocation} value={currentLocation} onChange={onLocationChosen}>
      {
        allLocations.map((location, index) =>
          <option value={location} key={index}>{location}</option>)
      }
    </select>
  )
};


export default ChooseLocation;
