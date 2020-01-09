/*
 * @Date: 2020-01-08 21:33:58
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-08 23:52:23
 * @content: I
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import Scroll from '../scroll/index';
import { PropTypes } from 'prop-types';
import style from '../../assets/global-style';

const Horizen = props => {
  // 为什么要创建这个数据结构呢？这是在做自己的UI吗？
  const { list, oldVal, title, handleClick } = props;

  return (
    <Scroll direction={'horizental'}>
      <List>
        <span>{title}</span>
        {list.map(item => {
          return (
            <ListItem
              key={item.key}
              className={`${oldVal === item.key ? 'selected' : ''}`}
              onClick={() => handleClick(item.key)}
            >
              {item.name}
            </ListItem>
          );
        })}
      </List>
    </Scroll>
  );
};

Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
};

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
};

export default memo(Horizen);

const List = styled.div`
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: inline-block;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style['font-size-m']};
    vertical-align: middle;
  }
`;

const ListItem = styled.span`
  display: inline-block;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style['theme-color']};
    border: 1px solid ${style['theme-color']};
    opacity: 0.8;
  }
`;
