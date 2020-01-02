/*
 * @Date: 2020-01-02 13:45:40
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-02 19:20:04
 * @content: I
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  /* 这里要写兼容RN的direction和wrap好呢？还是合在一起写一个flex-flow好？ */
  justify-content: space-around;
`;

export const ListItem = styled.div`
  /* position: relative; */
  width: 32%;
  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4));
    }
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style['font-size-s']};
      line-height: 15px;
      color: ${style['font-color-light']};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }

  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style['font-color-desc']};
  }
`;
