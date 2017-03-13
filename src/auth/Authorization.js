/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/users';
import { logIn } from '../actions/user';
import { saveUserInfo, saveUserPicture } from '../actions/async';
import LogInRequest from '../components/LogInRequest/LogInRequest.component';
import Loading from '../components/Loading/Loading.component';

const Authorization = (WrappedComponent: ReactClass<any>): ReactClass<any> => {

  type Props = {
    currentUser: User,
    logIn: Function,
    saveUserInfo: Function,
    saveUserPicture: Function
  }

  type State = {
    loadingVisible: boolean
  }

  class WithAuthorization extends Component {

    props: Props;
    state: State;
    fbLogIn: Function;

    constructor() {
      super();
      this.fbLogIn = this.fbLogIn.bind(this);
      this.state = {
        loadingVisible: true
      }
    }

    fbLogIn() {
      window.FB.login((res) => {
        if (res.status === 'connected') {
          this.props.saveUserInfo();
          this.props.saveUserPicture();
          this.props.logIn();
        }
      }, {scope: 'user_location'})
    }

    componentDidMount() {
      window.FB.getLoginStatus(
        res => {
          if (res.status === 'connected') {
            this.props.logIn();
          } else {
            this.fbLogIn();
          }
          this.setState({ loadingVisible: false });
        }
      );
    }

    render() {
      if (this.props.currentUser.loggedIn) {
        return <WrappedComponent {...this.props} />
      }
      return (
        this.state.loadingVisible ?
          <Loading /> :
          <LogInRequest onLoginClick={this.fbLogIn} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      currentUser: getCurrentUser(state)
    }
  };

  const mapDispatchToProps = {
    logIn,
    saveUserInfo,
    saveUserPicture
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthorization);

};

export default Authorization;