import React from 'react';
import { Navigation } from './components/Navigation/Navigation';

import './App.css';
import './variables.css';
import { NewEntry } from './components/Entry/NewEntry';

function App() {
  return (
    <div className='grid'>
      <Navigation />
      <NewEntry />
    </div>
  );
}

export default App;
