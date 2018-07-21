import { createAction } from 'redux-actions';

export const POST_USER_INFO          = 'POST_USER_INFO';
export const POST_USER_INFO_SUCCESS  = 'POST_USER_INFO_SUCCESS';
export const POST_USER_INFO_ERROR    = 'POST_USER_INFO_ERROR';

export const postUserInfo            = createAction(POST_USER_INFO);
export const postUserInfoSuccess     = createAction(POST_USER_INFO_SUCCESS);
export const postUserInfoError       = createAction(POST_USER_INFO_ERROR);
