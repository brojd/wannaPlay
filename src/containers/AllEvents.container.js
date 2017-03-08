/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class AllEventsContainer extends Component {
  
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(window.FB);
  }
  
  render() {
    return (
      <div>
         AllEvents container
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
