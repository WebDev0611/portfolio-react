import React from 'react';
import { Home } from '../components/home';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../utils/private-route';
import GetEmail from '../components/register/get-email';
import GetCompanyInfo from '../components/register/get-company-info';

import './styles.scss';

const View = () => (
  <Switch>
    <PrivateRoute exact path="/" component={ Home } />
    <Route path="/get-email" component={ GetEmail } />
    <Route path="/get-company-info" component={ GetCompanyInfo } />
  </Switch>
);

export default View;
