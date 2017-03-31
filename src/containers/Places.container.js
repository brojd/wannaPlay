/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
}

class PlacesContainer extends Component {

  props: Props;
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        places container
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

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
