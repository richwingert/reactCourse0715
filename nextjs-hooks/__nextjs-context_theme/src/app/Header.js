import React from 'react';
import logo from './logo192.png';

import {ThemeContext} from './theme';

export const Header = props => (
  <ThemeContext.Consumer>
    {theme => (
      <header
        className="App-header"
        style={{backgroundColor: theme.background}}
      >
        <img src='logo192.png' className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: theme.foreground}}>
          Welcome to React
        </h1>
      </header>
    )}
  </ThemeContext.Consumer>
);

export default Header;
