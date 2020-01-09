/*
 * @Date: 2020-01-01 19:07:26
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-09 10:23:44
 * @content: I
 */
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store';
import { reducer as singersReducer } from '../application/Singers/store';

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
});
