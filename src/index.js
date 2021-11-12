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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(con sole.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
