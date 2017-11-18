import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';
import Add from './add';
import AddSearch from './add-search';
import Search from './search';
import ApolloView from './apollo';

const Routes = () => {
  return (
    <Router>
      <App>
        <Route exact path="/" component={Add} />
        <Route exact path="/add" component={Add} />
        <Route path="/search" component={Search} />
        <Route path="/addsearch" component={AddSearch} />
        <Route path="/apollo" component={ApolloView} />
      </App>
    </Router>
  )
}

export default Routes;