import { post } from '../../../utils/request';
import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  postUserInfoSuccess,
  postUserInfoError,
  POST_USER_INFO, 
} from './actions';

export function* postUserInfo({ payload }) {
  try {
    yield call(post, '/users/register', payload );
    yield put(postUserInfoSuccess());
  } catch (error) {
    yield put(postUserInfoError(error.message));
  }
}

export default function* sagas() {
  yield takeEvery(POST_USER_INFO , postUserInfo);
}
