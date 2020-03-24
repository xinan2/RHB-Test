import { all, call, spawn } from 'redux-saga/effects';

import repoSaga from './RepoSaga';


export default function* rootSaga() {
    const sagas = [
      repoSaga,
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