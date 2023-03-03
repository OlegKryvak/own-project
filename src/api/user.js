import { USER_URL, APIGW_URL } from '@env';
import $http from '../utils/https';

export default {
  getProfile() {
    return $http.get(`${APIGW_URL}/user/user/my_profile`);
  },
  updateProfile(payload) {
    return $http.patch(`${APIGW_URL}/user/user/my_profile`, payload);
  },
  authByMagicId(magicId) {
    return $http.get(
      `${USER_URL}/auth/v4BPx8kxPUM5utBksHOg?magic-id=${magicId}`
    );
  },
  confirmEmailOtp(payload) {
    return $http.post(`${USER_URL}/auth/user/email-otp`, payload);
  },
};
