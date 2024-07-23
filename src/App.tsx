import React from 'react';

import './App.css';
import Main from './components/main';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-slate-200">
        <div className='max-w-7xl mx-auto py-20 px-4 relative'>
          <header className="flex flex-row  relative justify-between items-center h-1/4 py-25 px-6">
            <h1 className='text-blue-400 text-xl'>Dataleonlabs : Test technique</h1>
            <FontAwesomeIcon icon={faUser} className='text-slate-700 text-3xl' />



          </header>
          <Main />
        </div>

      </div>
    </div>
  );
}

export default App;
