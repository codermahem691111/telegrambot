import React from 'react'
import axios from 'axios'
import { useNavigate,Link,useLocation } from 'react-router-dom'
import Coin from './assets/coin.png'
import Tel from './assets/tel.png'
function Boost() {
    const navigate = useNavigate();
    const location = useLocation();
    const { counter } = location.state || {}; // Get the counter value from state
    const user = JSON.parse(localStorage.getItem('user'));
  
    const incrementCounter = async (value) => {
      try {
        const response = await axios.post(`http://localhost:5000/api/users/increment/${value}`, {
          username: user.username,
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/counter');
      } catch (error) {
        console.error('Error incrementing counter:', error);
      }
    };
  
    return (
    <div>
        <div className='flex flex-col justify-center items-center m-10'>
        
        <div className='flex  gap-2 flex-row'>
         <h1 className='text-[40px] text-white font-[700] '>Boost</h1>
        <h1 className='text-[34px]'>🚀</h1>
        </div>
        <div className='flex flex-row'>
        
         <img src={Coin} className='h-[20px] w-[20px]' alt="" />
         
       </div>
       {counter !== undefined && (
        <p className="mt-4 text-white text-[26px]">$$: <span className='text-[30px] text-white font-[800]'>{counter}</span></p>
      )}
      <p className='text-[10px] font-[200] text-white mt-5'>Boots your coin everyday</p>
       <p className='text-[14px] text-purple-900 font-bold mt-3'>How it works!</p>
  
         <div className='flex gap-4 flex-row justify-center items-center'>
             <div className='h-[100px] w-[200px] flex flex-row justify-center bg-[rgba(213,220,226,0.25)] rounded-[15px] items-center'>

             <div className='flex flex-col justify-center items-center'>
               <h1 className='text-[24px] font-[700] text-white'>Full Battery</h1>
               <h1 className='text-[20px] font-[300] text-white'>3/3 availabe</h1>
             </div>
             <h1 className='text-[34px] ml-2'>🔋</h1>
             </div>
             <div className='h-[100px] w-[200px] flex flex-row justify-center bg-[rgba(213,220,226,0.25)] rounded-[15px] items-center'>

<div className='flex flex-col justify-center items-center'>
  <h1 className='text-[24px] font-[700] text-white'>Lucky dice</h1>
  <h1 className='text-[20px] font-[300] text-white'>3/3 availabe</h1>
</div>
<h1 className='text-[34px] ml-2'>🎲</h1>
</div>          
         </div>
  
        <div className='mt-5 h-[400px] w-[400px] bg-[rgba(213,220,226,0.25)] flex flex-col justify-center items-center rounded-[10px]'>
           <div onClick={()=>incrementCounter(40)}    className='cursor-pointer h-[40px] w-[370px] flex gap-4 flex-row justify-center items-center'>
            <div className='bg-violet-400 h-[100px] w-[100px] rounded-[15px] flex flex-row justify-center items-center'>
              <h1 className='text-white font-[700] text-[30px]'>Claim</h1>
              </div>
              <div className='flex flex-col justify-center items-center text-start'>
              <h1 className='text-[12px] text-white'>Invite more friends.</h1>
              <h1 className='text-white'>20+coins</h1>
            </div>
           </div>
           <div onClick={()=>incrementCounter(50)} className=' cursor-pointer  mt-20 h-[40px] w-[370px] flex gap-4 flex-row justify-center items-center'>
            <div className='bg-violet-400 h-[100px] w-[100px] rounded-[15px] flex flex-row justify-center items-center'>
              <h1 className='text-white font-[700] text-[30px]'>Claim</h1>
              </div>
              <div className='flex flex-col justify-center items-center text-start'>
              <h1 className='text-[12px] text-white'>Invite more friends.</h1>
              <h1 className='text-white'>60+coins</h1>
            </div>
           </div>
           <div onClick={()=>incrementCounter(100)} className='cursor-pointer   mt-20 h-[40px] w-[370px] flex gap-4 flex-row justify-center items-center'>
            <div className='bg-[rgba(213,220,226,0.25)] h-[100px] w-[100px] rounded-[15px] flex flex-row justify-center items-center'>
            <img src={Tel} className='h-[180px] w-[350px]' alt="" />
              </div>
              <div className='flex flex-col justify-center items-center text-start'>
              <h1 className='text-[12px] text-white'>Join Our Chanel.</h1>
              <h1 className='text-white'>80+coins</h1>
            </div>
           </div>

        </div>
        <Link to="/counter" className="mt-10"><button className='px-[40px] text-white font-bold py-[20px] bg-cyan-500 rounded-[15px]'> Go back</button></Link>
        </div> 
   
    </div>
  )
}

export default Boost
