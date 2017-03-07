/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class SearchOnLiContainer extends Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        LinkedIn container
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchOnLiContainer);
