/*
 * @Date: 2020-01-09 09:45:44
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-09 10:00:52
 * @content: 导出renducer，即swich那段
 */
import { fromJS } from 'immutable';
import {
  CHANGE_ENTER_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLUP_LOADING,
  CHANGE_SINGER_LIST
} from './constants';

const defaultState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  pageCount: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case CHANGE_PAGE_COUNT:
      return state.set('pageCount', action.data);
    case CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
  }
};
