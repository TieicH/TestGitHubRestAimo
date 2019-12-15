import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import UserDetail from "./UserDetail/UserDetail";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPage}></Route>
          <Route path="/user/:id" component={UserDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
