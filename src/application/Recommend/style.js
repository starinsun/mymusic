/*
 * @Date: 2020-01-02 20:07:57
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-02 22:23:03
 * @content: I
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const Content = styled.div`
  position: fixed;
  top: 94px;
  /* 94px是为了让标题栏和导航栏加起来（44+50） */
  bottom: 0;
  width: 100%;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style['theme-color']};
  }
`;
