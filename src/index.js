import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './assets/css/general-responsive.css';
import App from './App';

const store = configureStore();

const Main = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));
