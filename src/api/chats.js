import { CHAT_URL } from '@env';
import $http from '../utils/https';

export default {
  getTokenForConnectionWs() {
    return $http.post(`${CHAT_URL}/ws_token`);
  },
  advertising() {
    return $http.get(`${CHAT_URL}/advertising`);
  },
  deleteAdvertising(messageId) {
    return $http.delete(`${CHAT_URL}/advertising`, {
      params: { messageId }
    });
  },
  media(params) {
    return $http.get(`${CHAT_URL}/media`, {
      params
    });
  },
  mediaData(chatId, params) {
    return $http.get(`${CHAT_URL}/media/${chatId}`, {
      params
    });
  },
  mediaAttachments(chatId, params) {
    return $http.get(`${CHAT_URL}/media/${chatId}/attachment`, {
      params
    });
  },
  mediaLinks(chatId, params) {
    return $http.get(`${CHAT_URL}/media/${chatId}/link`, {
      params
    });
  },
  mediaSubjects(chatId, params) {
    return $http.get(`${CHAT_URL}/media/${chatId}/subject`, {
      params
    });
  },
  getAllChatSettings() {
    return $http.get(`${CHAT_URL}/chat_settings`);
  },
  getChatSettings(chatId) {
    return $http.get(`${CHAT_URL}/chat_settings/${chatId}`);
  },
  updateChatSettings(chatId, data) {
    return $http.put(`${CHAT_URL}/chat_settings/${chatId}`, data);
  },
  getMood(params) {
    return $http.get(`${CHAT_URL}/mood`, { params });
  },
  getFilters() {
    return $http.get(`${CHAT_URL}/filter/list`);
  },
  createFilter(payload) {
    return $http.post(`${CHAT_URL}/filter`, payload);
  },
  updateFilter(payload) {
    return $http.patch(`${CHAT_URL}/filter`, payload);
  },
  deleteFilter(payload) {
    return $http.delete(`${CHAT_URL}/filter`, { data: payload });
  },
  getFilterChats() {
    return $http.get(`${CHAT_URL}/chat/filter/list`);
  },
  getFilterChatsById({ id }) {
    return $http.get(
      `${CHAT_URL}/chat/filter/list?chat_filter=${id}`
    );
  },
  addChatToFilter(payload) {
    return $http.post(`${CHAT_URL}/chat/filter`, payload);
  },
  deleteChatFromFilter(payload) {
    return $http.delete(`${CHAT_URL}/chat/filter`, {
      data: payload
    });
  }
};
