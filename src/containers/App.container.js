/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFbSdkReady } from '../selectors/facebook';
import { injectFbSdk } from '../actions/async';

type Props = {
  children: any
}

class AppContainer extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.injectFbSdk();
  }

  render() {
    return (
      <div>
        {this.props.fbSdkReady ? this.props.children : 'loading'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fbSdkReady: getFbSdkReady(state)
  }
};

const mapDispatchToProps = {
  injectFbSdk
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
