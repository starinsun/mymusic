/*
 * @Date: 2019-12-31 16:03:48
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-08 21:41:37
 * @content: I
 */
import React, { memo, useEffect } from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import Scroll from '../../baseUI/scroll';
import { Content } from './style';
import { getBannerList, getRecommendList } from './store/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading';

const Recommend = () => {
  //关于react-redux hooks的使用还有待商榷
  const bannerList = useSelector(state => {
    return state.getIn(['recommend', 'bannerList']);
  });

  const recommendList = useSelector(state =>
    state.getIn(['recommend', 'recommendList'])
  );

  const enterLoading = useSelector(state =>
    state.getIn(['recommend', 'enterLoading'])
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!bannerList.size) {
      dispatch(getBannerList());
    }
    if (!recommendList.size) {
      dispatch(getRecommendList());
    }
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : null}
    </Content>
  );
};

export default memo(Recommend);
