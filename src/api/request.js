/*
 * @Date: 2020-01-02 23:22:09
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-09 11:24:11
 * @content: I
 */
import { axiosInstance } from './config';

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
};

export const getRecommendListRequest = () => {
  return axiosInstance.get('./personalized');
};

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
