import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { 
  postUserInfo,
  postUserInfoSuccess,
  postUserInfoError
} from './actions';

const initialState = fromJS({
  loading: true,
  flash: null,
  getStarted: false,
});

const reducer = handleActions(
  {
    [postUserInfo](state) {
      return state
      .set('getStarted', true)
      .set('loading', true)
    },
    [postUserInfoSuccess](state, { payload }) {
      return state
      .set('getStarted', false)
      .set('loading', false)
      .set('flash', { status: 'success', type: 'info', code: 'updateSuccess' });
    },
    [postUserInfoError](state, { payload }) {
      return state
      .set('getStarted', false)
      .set('loading', false)
      .set('flash', { status: 'error', type: 'danger', msg: payload });
    }
  },
  initialState,
);

export default reducer;