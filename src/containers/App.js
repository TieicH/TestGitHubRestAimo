import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../hoc/asyncComponent';

const asyncSearchPage = asyncComponent(() => {
  return import('./SearchPage/SearchPage');
});

const asyncUserDetail = asyncComponent(() => {
  return import('./UserDetail/UserDetail');
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={asyncSearchPage}></Route>
          <Route path="/user/:id" component={asyncUserDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
