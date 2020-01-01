/*
 * @Date: 2019-12-31 16:03:27
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-01 19:06:28
 * @content: I
 */
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';

const Home = props => {
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">ESMusic</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span>排行</span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default memo(Home);
