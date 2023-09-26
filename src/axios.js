import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
//success info warning error

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

instance.interceptors.response.use(
    response => {
      notification[response.data.status.type](response.data.status);
      return response;
    },
    error => {
      if (error.response && error.response.status === 400){
        notification.error({
          message: 'Қате толтырылған форма',
          description: <ul>{error.response.data.map(message=><li>{message.msg}</li>)}</ul>
        });
      }
      if(error.response.data?.status.type){
      notification[error.response.data.status.type](error.response.data.status);
      } else {
        notification.error({message: 'Сұрау орындалмады', description: 'Сервермен байланыс орнатылмады'});
      }
      return Promise.reject(error);
    }
  );

export default instance;