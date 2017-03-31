/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../actions/location';
import { getCurrentLocation } from '../selectors/location';
import { getCurrentUser } from '../selectors/users';
import { allLocations, defaultLocation } from '../config';
import ChooseLocation from '../components/ChooseLocation/ChooseLocation.component';

type Props = {
  currentLocation: string,
  currentUser: User,
  setLocation: Function
}

class ChooseLocationContainer extends Component {

  props: Props;
  handleLocationChosen: Function;

  constructor() {
    super();
    this.handleLocationChosen = this.handleLocationChosen.bind(this);
  }

  handleLocationChosen(event): void {
    this.props.setLocation(event.target.value);
  }

  render() {
    const currentLocation = allLocations.includes(this.props.currentLocation) ?
      this.props.currentLocation :
      defaultLocation;
    return (
      this.props.currentUser.loggedIn ?
        <ChooseLocation currentLocation={currentLocation}
                        allLocations={allLocations}
                        onLocationChosen={this.handleLocationChosen} /> :
        <span></span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: getCurrentLocation(state),
    currentUser: getCurrentUser(state)
  }
};

const mapDispatchToProps = {
  setLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLocationContainer);
