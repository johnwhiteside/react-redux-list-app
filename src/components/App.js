import React from 'react';
import List from '../containers/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const App = () => (
  <MuiThemeProvider>
    <List />
  </MuiThemeProvider>
);

export default App;
