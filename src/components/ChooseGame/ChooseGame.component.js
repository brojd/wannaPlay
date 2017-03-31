/* @flow */

import React from 'react';
import styles from './ChooseGame.stylesheet.css';
import classNames from 'classnames';

type Props = {
  gameTypes: GameTypes,
  onGameChosen: Function,
  currentGameType: GameType
}

const ChooseGame = ({ gameTypes, onGameChosen, currentGameType }: Props) => {
  const isCurrent = gameType => gameType.id === currentGameType.id;
  return (
    <ul className={styles.ChooseGame}>
      {
        gameTypes.map((gameType, index) =>
          <li key={index}
              className={classNames(styles.gameType, {[styles.currentGameType]: isCurrent(gameType)})}
              onClick={() => onGameChosen(gameType)}>
            <img src={gameType.imgUrl} alt={gameType.name} />
            <div>{gameType.name}</div>
          </li>
        )
      }
    </ul>
  )
};


export default ChooseGame;
