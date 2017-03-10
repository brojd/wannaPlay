/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/users';
import { logIn } from '../actions/user';
import LogInRequest from '../components/LogInRequest/LogInRequest.component';
import Loading from '../components/Loading/Loading.component';

const Authorization = (WrappedComponent: ReactClass<any>): ReactClass<any> => {

  type Props = {
    currentUser: User,
    logIn: Function
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
          this.props.logIn();
        }
      })
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
    logIn
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthorization);

};

export default Authorization;