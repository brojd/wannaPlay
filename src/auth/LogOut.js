/* @flow */

import React from 'react';
import { browserHistory } from 'react-router';
import { logOut } from '../actions/user';
import { connect } from 'react-redux';
import Loading from '../components/Loading/Loading.component';

type Props = {
  logOut: Function
};

class LogOut extends React.Component {

  props: Props;

  componentDidMount() {
    window.FB.logout(res => {
      this.props.logOut();
      browserHistory.push('/');
    });
  }

  render() {
    return <Loading />
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);