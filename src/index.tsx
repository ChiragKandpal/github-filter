import React from 'react';
import ReactDOM from 'react-dom';
import SearchRepo from './components/search-repo-home/search-repo';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import './style/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SearchRepo />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
