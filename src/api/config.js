/*
 * @Date: 2020-01-02 23:17:22
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-02 23:21:45
 * @content: I
 */
import axios from 'axios';
export const baseUrl = 'http://localhost:4000';

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  }
);

export { axiosInstance };
