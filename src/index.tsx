import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store'
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const renderApp = (): void => {
  render(
    <React.StrictMode>
      <Provider store={configureStore({})}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals();

renderApp()
