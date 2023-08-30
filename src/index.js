import React from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';

import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);