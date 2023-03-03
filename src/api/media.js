import { MEDIA_URL } from '@env';
import $http from '@utils/https';

export default {
  async uploadFile(payload) {
    const response = await $http.post(
      `${MEDIA_URL}/upload`,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
    );
    return response.data;
  }
};
