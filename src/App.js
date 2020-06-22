import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';

function App() {

  let countState = useState(0) ;

  return (
    <counterContext.Provider value = {countState}>
        <div><Parent name = "Abdul Samad"></Parent></div>
    </counterContext.Provider>
  );
}

export default App;
