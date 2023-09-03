import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'; // Import IntlProvider
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>
);
