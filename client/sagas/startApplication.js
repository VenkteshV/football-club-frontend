import { call, put, fork, take } from 'redux-saga/effects';
import { callPost } from '../services/api';
import * as actions from '../constants/actions';
import * as query from '../constants/query';
export default function* watchStartApplication() {
  yield take( actions.START_APPLICATION );
  yield fork( connect );
}

export function* connect() {
  const data = query;
  const response =   yield call( callPost, '/footballers', data);
  console.log('http://localhost:3200/footballers',response.response.data.football);
  yield put( { type: actions.CONFIG_LOADED, config: response.response.data.football } );

}
