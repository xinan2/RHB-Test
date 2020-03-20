import { put, takeLatest, call } from 'redux-saga/effects';
import {
	ORDER_LIST_FETCH,
	ORDER_LIST_FAILURE,
	ORDER_LIST_SUCCESS
} from '../constant';

function* fetchOrderList(action) {
	try {
		const requestURL = `https://api.spacexdata.com/v3/launches/latest`;
		const response = yield call(fetch, requestURL);
		yield put({ type: ORDER_LIST_SUCCESS, data: response });
	} catch (err) {
		yield put({ type: ORDER_LIST_FAILURE, data: err });
	}

}

export default function* loginSaga() {
	yield takeLatest(ORDER_LIST_FETCH, fetchOrderList);
}
