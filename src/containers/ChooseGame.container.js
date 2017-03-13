/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameTypes } from '../config';
import ChooseGame from '../components/ChooseGame/ChooseGame.component';

type Props = {
}

class ChooseGameContainer extends Component {

  props: Props;

  constructor() {
    super();
  }

  render() {
    return (
      <ChooseGame gameTypes={gameTypes} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGameContainer);
