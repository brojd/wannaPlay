/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class MyEventsContainer extends Component {

  props: Props;
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        my events container
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

export default connect(mapStateToProps, mapDispatchToProps)(MyEventsContainer);
