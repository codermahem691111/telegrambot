import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToHistory } from './HistorySlice';
import { setCounter } from './CounterSlice';




function Home() {

    const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const inputHistory = useSelector((state) => state.history);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToHistory(input));
    dispatch(setCounter(Number(input) || 0));
    setInput('');
  };

    return (
    <div>
       <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add to History</button>
      </form>
      <h2>Input History</h2>
      
        
            <Link to='/counter'></Link>
          
        
    </div>
    </div>
  )
}

export default Home
