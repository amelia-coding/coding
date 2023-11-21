/**随机数 */
export const randStr = () => {
  //36进制，substr去除小数位前，如'0.mxrt23r032q'
  return Math.random().toString(36).substr(2);
};
