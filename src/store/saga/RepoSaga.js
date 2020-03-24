import { put, takeLatest, call } from 'redux-saga/effects';
import {
	REPO_LIST_FETCH,
	REPO_LIST_SUCCESS,
	REPO_LIST_FAILURE,
} from '../constant';

const getData = (data) => {
	return fetch(`https://api.github.com/search/repositories?per_page=10&q=${data.query}&page=${data.page}`)
		.then(response => response.json())
		.then(json => json)
		.catch(error => { throw error })
}

function* fetchRepoList({ data }) {
	try {
		const response = yield call(getData, data);
		yield put({ type: REPO_LIST_SUCCESS, data: response });
	} catch (err) {
		yield put({ type: REPO_LIST_FAILURE, data: err });
	}

}

export default function* loginSaga() {
	yield takeLatest(REPO_LIST_FETCH, fetchRepoList);
}
