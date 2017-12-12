import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'module/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from 'container';

const store = createStore(reducer, composeWithDevTools());

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Container />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
