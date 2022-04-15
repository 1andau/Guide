import React from 'react';
// import { BrowserRouter as Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { UserContextProvider } from './auth/context/userContext';




ReactDOM.render(

<UserContextProvider>
<Provider store={store}>
<Router>
  <App />
</Router>
</Provider>
</UserContextProvider>,




  document.getElementById('root')
);

