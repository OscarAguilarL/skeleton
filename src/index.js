import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import { SkeletonApp } from './pages/SkeletonApp';

ReactDOM.render(
  <React.StrictMode>
    <SkeletonApp />
  </React.StrictMode>,
  document.getElementById('root')
);
