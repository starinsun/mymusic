/*
 * @Date: 2020-01-02 13:45:33
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-02 19:02:04
 * @content: I
 */
import React, { memo } from 'react';
import { ListWrapper, ListItem, List } from './style';
import { getCount } from '../../api/utils';

const RecommendList = props => {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={item.picUrl + '?param=300×300'}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default memo(RecommendList);
