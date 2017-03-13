/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../selectors/location';
import { allLocations, defaultLocation } from '../config';
import ChooseLocation from '../components/ChooseLocation/ChooseLocation.component';

type Props = {
  currentLocation: string
}

class ChooseLocationContainer extends Component {

  props: Props;
  handleLocationChosen: Function;

  constructor() {
    super();
    this.handleLocationChosen = this.handleLocationChosen.bind(this);
  }

  handleLocationChosen(): void {
    debugger;
  }

  render() {
    const currentLocation = allLocations.includes(this.props.currentLocation) ?
      this.props.currentLocation :
      defaultLocation;
    return (
      <ChooseLocation currentLocation={currentLocation}
                      allLocations={allLocations}
                      onLocationChosen={this.handleLocationChosen} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: getCurrentLocation(state)
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLocationContainer);
