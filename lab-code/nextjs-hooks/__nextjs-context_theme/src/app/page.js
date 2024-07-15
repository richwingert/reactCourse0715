"use client";

import React, {useState, useContext} from 'react';

import {ThemeContext, themes} from './theme';
import Header from "./Header";
import './App.css';

export default function App() {

  const [theme, setTheme] = useState({theme: themes.dark });


  const changeTheme = evt => {
    // this.setState(state => ({
    //   theme: state.theme === themes.dark ? themes.light : themes.dark
    // }));

    setTheme(theme === themes.dark ? themes.light : themes.dark);
    };


  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header />
        <p className="App-intro">
        To get started, edit <code>src/app/page.js</code> and save to reload.
        </p>
        <button onClick={changeTheme}>Change theme</button>
      </ThemeContext.Provider>
    </div>
  );

}





