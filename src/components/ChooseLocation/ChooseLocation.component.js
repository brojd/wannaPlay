/* @flow */

import React from 'react';
import styles from './ChooseLocation.stylesheet.css';

type Props = {
  currentLocation: string,
  allLocations: Array<string>,
  onLocationChosen: Function
}

const ChooseLocation = ({ currentLocation, allLocations, onLocationChosen }: Props) => {

  console.log(currentLocation);
  console.log(allLocations);
  console.log(onLocationChosen);
  return (
    <div className={styles.ChooseLocation}>
      choose location
    </div>
  )
};


export default ChooseLocation;
