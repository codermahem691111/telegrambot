import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Coin from './assets/coin.png';
import axios from 'axios';

function Counter() {
  const [user, setUser] = useState(null);
  const [loaderValue, setLoaderValue] = useState(1000);
  const [isDecrementing, setIsDecrementing] = useState(false);
  const navigate = useNavigate();
  const refillInterval = 160; // Adjust the refill speed as needed
  const decrementInterval = 200; // Adjust the decrement speed as needed

  useEffect(() => {
    // User authentication check
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/');
    } else {
      setUser(loggedInUser);
    }

    // Loader auto-increment setup
    const incrementLoader = () => {
      setLoaderValue((prevValue) => {
        if (prevValue < 1000) {
          return prevValue + 1;
        } else {
          return prevValue;
        }
      });
    };

    let incrementIntervalId = setInterval(() => {
      if (!isDecrementing) {
        incrementLoader();
      }
    }, refillInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(incrementIntervalId);
  }, [navigate, isDecrementing]);

  const handleButtonClick = useCallback(async () => {
    if (user && user.username) {
      try {
        const response = await axios.post('http://localhost:5000/api/users/increment', {
          username: user.username,
        });
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error incrementing user:', error);
      }
    }

    setLoaderValue((prevValue) => Math.max(prevValue - 1, 0));
    setIsDecrementing(true);
    setTimeout(() => {
      setIsDecrementing(false);
    }, decrementInterval);
  }, [user, decrementInterval]);

  useEffect(() => {
    let decrementIntervalId;
    if (isDecrementing) {
      decrementIntervalId = setInterval(() => {
        setLoaderValue((prevValue) => Math.max(prevValue - 1, 0));
      }, decrementInterval);
    }

    return () => clearInterval(decrementIntervalId);
  }, [isDecrementing, decrementInterval]);

  if (!user) {
    return null; // or a loading indicator
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-white text-[30px]">Hello 👋 {user.username}</p>
        <div className="flex gap-2 flex-row justify-center items-center mt-5">
          <img src={Coin} className="h-[20px] w-[20px]" alt="" />
          <h1 className="text-white text-[17px] font-[200]">Your balance</h1>
        </div>
        <p className="text-white text-4xl">{user.counter}</p>
        <img src={Coin} onClick={handleButtonClick} className="h-[300px] w-[300px]" alt="Coin" />
        <br />
        <div className="w-64 h-10 border border-gray-300 rounded mt-[-40px] mb-4 mx-auto relative">
          <div
            className="h-full bg-green-500 rounded"
            style={{ width: `${(loaderValue / 1000) * 100}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            {loaderValue}
          </div>
        </div>
        <div className="border border-white rounded-[10px] h-[65px] w-[300px] flex gap-3 flex-row justify-center items-center">
          <div className="flex flex-col cursor-pointer">
           <Link to='/mates'>
            <h1 className="text-[34px]">👨‍🚀</h1>
           </Link>
           
            <h1 className="text-[10px] text-white">Mates</h1>
          </div>
          <div className="line-container w-0 h-10">
            <div className="line bg-white h-full w-0.5"></div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <Link to="/task" state={{ counter: user.counter }}>
              <h1 className="text-[34px]">📝</h1>
            </Link>
            <h1 className="text-[10px] text-white">Task</h1>
          </div>
          <div className="line-container w-0 h-10">
            <div className="line bg-white h-full w-0.5"></div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <Link to='/boost'>
            <h1 className="text-[34px]">🚀</h1>
            </Link>
            <h1 className="text-[10px] text-white">Boast</h1>
          </div>
          <div className="line-container w-0 h-10">
            <div className="line bg-white h-full w-0.5"></div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <h1 className="text-[34px]">📉</h1>
            <h1 className="text-[10px] text-white">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
