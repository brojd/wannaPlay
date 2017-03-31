/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameTypes } from '../config';
import { setGameType } from '../actions/gameType';
import { getCurrentGameType } from '../selectors/gameType';
import ChooseGame from '../components/ChooseGame/ChooseGame.component';

type Props = {
  currentGameType: GameType,
  setGameType: Function
}

class ChooseGameContainer extends Component {

  props: Props;
  handleGameChosen: Function;

  constructor() {
    super();
    this.handleGameChosen = this.handleGameChosen.bind(this);
  }

  handleGameChosen(gameType) {
    console.log(gameType);
    this.props.setGameType(gameType)
  }

  render() {
    return (
      <ChooseGame gameTypes={gameTypes}
                  onGameChosen={this.handleGameChosen}
                  currentGameType={this.props.currentGameType} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentGameType: getCurrentGameType(state)
  }
};

const mapDispatchToProps = {
  setGameType
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGameContainer);
