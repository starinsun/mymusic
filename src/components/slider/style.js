/*
 * @Date: 2020-01-01 22:51:11
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-02 22:16:04
 * @content: I
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${style['theme-color']};
  }
  .slider-container {
    position: relative;
    width: 97%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style['theme-color']};
    }
  }
`;
