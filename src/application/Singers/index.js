/*
 * @Date: 2019-12-31 16:03:37
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-09 18:38:26
 * @content: I
 */
import React, { memo, useState, useEffect } from 'react';
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item';
import Scroll from '../../baseUI/scroll';
import { NavContainer, ListContainer, List, ListItem } from './style';
import {
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  refreshMoreSingerList,
  changePullUpLoading,
  changePullDownLoading,
  refreshMoreHotSingerList
} from './store/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading';

const Singer = () => {
  useEffect(() => {
    getHotSingerDispatch();
    // eslint-disable-next-line
  }, []);

  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');
  let handleUpdateAlpha = val => {
    setAlpha(val);
    updateDispatch(category, val);
  };
  let handleUpdateCatetory = val => {
    setCategory(val);
    updateDispatch(val, alpha);
  };
  let handlePullUp = () => {
    pullUpRefreshDiapatch(category, alpha, category === '', pageCount);
  };
  let handlePullDown = () => {
    pullDownRefreshDispatch(category, alpha);
  };
  const singerList = useSelector(state =>
    state.getIn(['singers', 'singerList'])
  );
  const enterLoading = useSelector(state =>
    state.getIn(['singers', 'enterLoading'])
  );
  const pullUpLoading = useSelector(state =>
    state.getIn(['singers', 'pullUpLoading'])
  );
  const pullDownLoading = useSelector(state =>
    state.getIn(['singers', 'pullDownLoading'])
  );
  const pageCount = useSelector(state => state.getIn(['singers', 'pageCount']));

  const dispatch = useDispatch();
  const getHotSingerDispatch = () => {
    dispatch(getHotSingerList());
  };

  const updateDispatch = (category, alpha) => {
    dispatch(changePageCount(0));
    dispatch(changeEnterLoading(true));
    dispatch(getSingerList(category, alpha));
  };

  const pullUpRefreshDiapatch = (category, alpha, hot, count) => {
    dispatch(changePullUpLoading(true));
    dispatch(changePageCount(count + 1));
    if (hot) {
      dispatch(refreshMoreHotSingerList());
    } else {
      dispatch(refreshMoreSingerList(category, alpha));
    }
  };

  const pullDownRefreshDispatch = (category, alpha) => {
    dispatch(changePullDownLoading(true));
    dispatch(changePageCount(0));
    if (category === '' && alpha === '') {
      dispatch(getHotSingerList());
    } else {
      dispatch(getSingerList(category, alpha));
    }
  };

  const renderSingerList = () => {
    const list = singerList ? singerList.toJS() : [];
    return (
      <List>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={require('./singer.png')}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          );
        })}
      </List>
    );
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
        <Scroll
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
          onScroll={forceCheck}
        >
          {renderSingerList()}
        </Scroll>
        <Loading show={enterLoading}></Loading>
      </ListContainer>
    </NavContainer>
  );
};

export default memo(Singer);
