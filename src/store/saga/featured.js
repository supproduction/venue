import {put, call, takeEvery, all, takeLatest} from 'redux-saga/effects';
import axios from '../utils';

import * as actions from '../actions';


function* requestFeaturedDetailsPage() {
    try {
        const res = yield axios.get("/featured.json");

        yield put(actions.responsePageApi(res.data))

    } catch (err) {
        console.log(err);
    }
}

function* requestChangeDeadlineSaga(action) {
    yield put(actions.responseChangeDeadline(action.deadline));
    // yield axios.delete("/featured/deadline.json");
    yield axios.put("/featured/deadline.json", action.deadline);
}


export function* watchRequestFeaturedDeatailsPage() {
    yield takeLatest("REQUEST_PAGE_API", requestFeaturedDetailsPage),
    yield takeLatest("REQUEST_CHANGE_DEADLINE", requestChangeDeadlineSaga)
}