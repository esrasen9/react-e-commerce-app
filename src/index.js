import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "./context/Context";
import {initialState,reducer} from "./context/reducer";
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider initialState={initialState} reducer={reducer}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
