import { fork, all } from 'redux-saga/effects';

import { getEmailSagas } from './components/register/get-email';

function* rootSagas() {
  yield all([
    fork(getEmailSagas)
  ]);
}

export default rootSagas;