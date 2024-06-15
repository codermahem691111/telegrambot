import React, { useState } from 'react';
import '../src/Styles/login.css'
import { useNavigate } from 'react-router-dom';
import { login } from './UserSlice';
import axios from 'axios';
function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/users/login', { username });
    localStorage.setItem('user', JSON.stringify(response.data));
    navigate('/counter');
  };


  return (
    <div className='flex justify-center items-center'>
      <div className='mt-[50px] flex flex-col h-[400px] w-[350px] bg-[rgba(213,220,226,0.25)]  shadow-sm p-4 rounded-[30px] justify-center items-center'>
       <h1 className='text-white text-[20px] p-4 font-[700] text-center'>Hello!! Continue with UserName plz</h1>
      <form className='flex flex-col justify-center items-center ' onSubmit={handleSubmit}>
        <input className='bg-white text-dark font-[500] rounded-[15px] px-[15px] py-[10px]'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className='px-[20px] py-[10px] mt-[10px] bg-cyan-400 rounded-[15px] font-[600]' type="submit">Login</button>
      </form>
   </div>
 
    </div>
  );
}

export default Login;