/*
 * @Date: 2020-01-02 23:22:09
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-02 23:23:34
 * @content: I
 */
import { axiosInstance } from './config';

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
};

export const getRecommendListRequest = () => {
  return axiosInstance.get('./personalized');
};
