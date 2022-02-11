/* eslint-disable */
import React, { Component, useState, useContext } from 'react'
import './App.css'
import Intro from './components/introduction/intro'
import About from './components/about/about'
import PorjectList from './components/projectList/projectList'
import Contact from './components/contact/contact'
import Toggle from './components/toggle/toggle'
import { ThemeContext, ThemeProvider } from './context'


const App = ()=>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return(
    <div style={{ backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white", }}>
      <Toggle />
      <Intro />
      <About />
      <PorjectList />
      <Contact />
    </div>
  )
}


export default App;
