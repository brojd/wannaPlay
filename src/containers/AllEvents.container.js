/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChooseGameContainer from './ChooseGame.container';

type Props = {
}

class AllEventsContainer extends Component {

  props: Props;
  
  constructor() {
    super();
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
        <ChooseGameContainer />
        allEvents container
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AllEventsContainer);
