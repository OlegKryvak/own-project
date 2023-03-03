import { APIGW_URL } from '@env';
import $http from '../utils/https';

export default {
  authByEmail(data) {
    return $http.post(
      `${APIGW_URL}/auth/v4BPx8kxPUM5utBksHOg`,
      data
    );
  },
  authByMagicId(magicId) {
    return $http.get(
      `${APIGW_URL}/auth/v4BPx8kxPUM5utBksHOg?magic-id=${magicId}`
    );
  },
  confirmEmailOtp(payload) {
    return $http.post(`${APIGW_URL}/auth/user/email-otp`, payload);
  },
  logout(payload) {
    return $http.post(`${APIGW_URL}/auth/user/logout`, payload);
  }
};
