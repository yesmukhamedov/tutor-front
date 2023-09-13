import axios from 'axios';
import { openNotice } from './components/notification.js';

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 403)
        openNotice('error', 'Рұқсат 403', 'Жүйеге кірмеген қолданушы');
      return Promise.reject(error);
    }
  );

export default instance;