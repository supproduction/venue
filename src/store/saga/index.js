import {fork, all} from 'redux-saga/effects';

import * as featuredSagas from './featured';

export default function* rootSaga() {
    yield all([
        ...Object.values(featuredSagas)
    ].map(fork))
}