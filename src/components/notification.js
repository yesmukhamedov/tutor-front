import React from 'react';
import { notification } from 'antd';

const Notic = () =>{
  const [api, contextHolder] = notification.useNotification();
  return {api, contextHolder};
}

export const openNotice = (type, title, text) => {
  const { api } = Notic();
  api[type]({
    message: title,
    description: text
  });
};

export const notice = ()=> {
  const {contextHolder} = Notic();
  return contextHolder;
};
