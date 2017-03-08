import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.component';
import AllEventsContainer from './containers/AllEvents.container';
import MyEventsContainer from './containers/MyEvents.container';
import PlacesContainer from './containers/Places.container';
import About from './components/About/About.component';

const routes =
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AllEventsContainer} />
      <Route path='myevents' component={MyEventsContainer} />
      <Route path='places' component={PlacesContainer} />
      <Route path='about' component={About} />
    </Route>
  </Router>;

export default routes;
