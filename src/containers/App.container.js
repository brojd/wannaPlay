/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class AppContainer extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    debugger;
  }

  render() {
    return (
      <div>
        {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
