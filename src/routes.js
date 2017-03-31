import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.component';
import MainContainer from './containers/Main.container';
import AllEventsContainer from './containers/AllEvents.container';
import MyEventsContainer from './containers/MyEvents.container';
import PlacesContainer from './containers/Places.container';
import About from './components/About/About.component';
import Authorization from './auth/Authorization';
import LogOut from './auth/LogOut';

const routes =
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route component={MainContainer}>
        <IndexRoute component={Authorization(AllEventsContainer)} />
        <Route path='myevents' component={Authorization(MyEventsContainer)} />
        <Route path='places' component={Authorization(PlacesContainer)} />
        <Route path='about' component={About} />
        <Route path='logout' component={LogOut} />
      </Route>
    </Route>
  </Router>;

export default routes;
