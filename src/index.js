import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* global-style */}
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
