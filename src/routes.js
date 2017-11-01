import React from 'react';
import { Route} from 'react-router';
import {
    App,
    NotFound,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
