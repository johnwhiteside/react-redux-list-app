import React from 'react';
import List from 'containers/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <List />
  </MuiThemeProvider>
);

export default App;
