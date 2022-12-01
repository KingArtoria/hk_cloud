import request from './request';
// ? 登录/注册
export const login = (data) => {
  return request({
    url: '/login/SmsLogin',
    method: 'post',
    data,
  });
}
// ? 获取验证码
export const getVerifyCode = (data) => {
  return request({
    url: '/AlibabaSms/sms',
    method: 'post',
    data,
  });
}