import { all, call, spawn } from 'redux-saga/effects';

import loginSaga from './LoginSaga';


export default function* rootSaga() {
    const sagas = [
        loginSaga,
    ];
  
    yield all(
      sagas.map(saga =>
        spawn(function*() {
          while (true) {
            try {
              yield call(saga);
              break;
            } catch (e) {
              console.log(e);
            }
          }
        })
      )
    );
  }