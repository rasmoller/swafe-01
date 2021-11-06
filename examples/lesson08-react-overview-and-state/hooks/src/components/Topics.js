import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from 'react-router-dom'
import Topic from "./Topic";


function Topics() {
  let match = useRouteMatch()

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Topics