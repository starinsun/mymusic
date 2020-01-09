/*
 * @Date: 2019-12-31 16:03:37
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-08 23:55:07
 * @content: I
 */
import React, { memo, useState } from 'react';
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item';
import Scroll from '../../baseUI/scroll';
import { NavContainer, ListContainer, List, ListItem } from './style';

const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
  return {
    picUrl:
      'https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg',
    name: '隔壁老樊',
    accountId: 277313426
  };
});

const renderSingerList = () => {
  return (
    <List>
      {singerList.map((item, index) => {
        return (
          <ListItem key={item.accountId + index}>
            <div className="img_wrapper">
              <img
                src={`${item.picUrl}?param=300x300`}
                width="100%"
                height="100%"
                alt="music"
              />
            </div>
            <span className="name">{item.name}</span>
          </ListItem>
        );
      })}
    </List>
  );
};

const Singer = () => {
  let [category, setCatgory] = useState('');
  let [alpha, setAlpha] = useState('');
  let handleUpdateAlpha = val => {
    setAlpha(val);
  };
  let handleUpdateCatetory = val => {
    setCatgory(val);
  };
  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={'分类(默认热门):'}
        handleClick={val => handleUpdateCatetory(val)}
        oldVal={category}
      ></Horizen>
      <Horizen
        list={alphaTypes}
        title={'首字母:'}
        handleClick={val => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Horizen>
      <ListContainer>
        <Scroll>{renderSingerList()}</Scroll>
      </ListContainer>
    </NavContainer>
  );
};

export default memo(Singer);
