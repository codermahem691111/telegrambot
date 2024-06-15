import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './Store'
import Login from './Login'
import Counter from './Counter'
import Boost from './Boost'
import Mates from './Mates'
function App() {
  

  return (
    <>


  <Provider store={Store}>
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/counter" element={<Counter />} />
     <Route path='/task' Component={Task} ></Route>
      <Route path='/boost' Component={Boost}></Route>    
      <Route path='/mates' Component={Mates}></Route>


       </Routes>
     
     
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
