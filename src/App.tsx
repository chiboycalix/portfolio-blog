import React from 'react';
import './App.scss';
import { Hero, AboutMe } from './sections'

const App = () => {
  return (
    <div className="app">
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
