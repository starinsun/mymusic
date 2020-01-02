/*
 * @Date: 2020-01-02 14:00:32
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-02 14:03:31
 * @content: I
 */
export const getCount = count => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
};
