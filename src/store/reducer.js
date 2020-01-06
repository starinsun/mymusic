/*
 * @Date: 2020-01-01 19:07:26
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-02 23:45:08
 * @content: I
 */
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store';

export default combineReducers({
  recommend: recommendReducer
});
