import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { App } from './app';
import './styles/index.scss';

const mainRoots = document.getElementById('root');
ReactDOM.render(<StrictMode><App /></StrictMode>, mainRoots);

reportWebVitals();
