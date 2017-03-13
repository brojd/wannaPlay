/* @flow */

import bowling from './gameTypeImages/bowling.png';
import badminton from './gameTypeImages/badminton.png';
import squash from './gameTypeImages/squash.png';
import board_games from './gameTypeImages/board_games.png';
import pool from './gameTypeImages/pool.png';
import basketball from './gameTypeImages/basketball.png';
import volleyball from './gameTypeImages/volleyball.png';


const gameTypes: GameTypes = [
  {
    id: 1,
    name: 'Bowling',
    imgUrl: bowling
  },
  {
    id: 2,
    name: 'Pool',
    imgUrl: pool
  },
  {
    id: 3,
    name: 'Board Games',
    imgUrl: board_games
  },
  {
    id: 4,
    name: 'Squash',
    imgUrl: squash
  },
  {
    id: 5,
    name: 'Badminton',
    imgUrl: badminton
  },
  {
    id: 6,
    name: 'Basketball',
    imgUrl: basketball
  },
  {
    id: 7,
    name: 'Volleyball',
    imgUrl: volleyball
  }
];

export default gameTypes;
