import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
    // localStorage.users
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/get-email', state: { from: props.location } }} />
  )} />
)

export default PrivateRoute;