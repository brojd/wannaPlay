/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class SearchOnFbContainer extends Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
         Facebook container
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchOnFbContainer);
