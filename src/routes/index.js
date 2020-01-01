/*
 * @Date: 2019-12-31 16:02:37
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-01 19:19:17
 * @content: I
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
];
