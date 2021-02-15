import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import Layout from './components/Layout'
import initialState from './initialState'

const store = createStore(reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));