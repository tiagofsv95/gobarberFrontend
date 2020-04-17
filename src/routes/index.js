import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

import Dashoboard from '../pages/Dashoboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/dashboard" component={Dashoboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
