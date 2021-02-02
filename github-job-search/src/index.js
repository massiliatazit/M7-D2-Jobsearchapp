import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // allows to store data to the homePage comp and all child comp
import store from './store/store';
//import HomePage from './componenents/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import App from './componenents/App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  ,
  document.getElementById('root')
);