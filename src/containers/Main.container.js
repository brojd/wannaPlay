/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFbSdkReady } from '../selectors/facebook';
import { injectFbSdk } from '../actions/async';
import Loading from '../components/Loading/Loading.component';

type Props = {
  children: any,
  injectFbSdk: Function
}

class AppContainer extends Component {

  props: Props;

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.injectFbSdk();
  }

  render() {
    return (
      <main>
        {this.props.fbSdkReady ? this.props.children : <Loading />}
      </main>
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
