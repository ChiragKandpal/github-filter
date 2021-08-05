import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/search-repo-home/search-repo';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import './style/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
