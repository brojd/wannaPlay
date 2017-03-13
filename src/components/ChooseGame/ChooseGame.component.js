/* @flow */

import React from 'react';
import styles from './ChooseGame.stylesheet.css';

type Props = {
  gameTypes: GameTypes
}

const ChooseGame = ({ gameTypes }: Props) => {
  return (
    <ul className={styles.ChooseGame}>
      {
        gameTypes.map((gameType, index) =>
          <li key={index}>
            <img src={gameType.imgUrl} alt={gameType.name} />
            <div>{gameType.name}</div>
          </li>
        )
      }
    </ul>
  )
};


export default ChooseGame;
