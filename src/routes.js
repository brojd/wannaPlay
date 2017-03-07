import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.component';
import SearchOnFbContainer from './containers/SearchOnFbContainer.container';
import SearchOnLiContainer from './containers/SearchOnLiContainer.container';
import About from './components/About/About.component';

const routes =
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SearchOnFbContainer} />
      <Route path='linkedin' component={SearchOnLiContainer} />
      <Route path='about' component={About} />
    </Route>
  </Router>;

export default routes;
