import { call, put, fork, take,select } from 'redux-saga/effects';
import { callPost } from '../services/api';
import * as actions from '../constants/actions';
import { searchResult, removeScore } from '../utils/searchUtil';
import {config} from './selectors';
export default function* watchSearchConditionRequest() {
  let searchAction;
  while ((searchAction = yield take(actions.SEARCH_CONDITION_TRIGGER)) !== null) {
    yield fork(searchConditions, searchAction);
  }
}
export function* searchConditions(searchAction) {
  try {
    const conditions = yield select(config);
    let result = yield call(searchResult, searchAction.payload.searchValue, conditions.config);
    yield put({
      type: actions.CONFIG_LOADED,
      searchResult: result,
      config: conditions.config,
      searchText: searchAction.payload.searchValue,
    });
  }
  catch (error) {
    console.log(error);
  }
}
