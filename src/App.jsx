import React from 'react'
import SignUp from './pages/signup'
import { Routes,Route } from 'react-router-dom'
import Mail from './pages/mail'
import Home from './pages/home'

function App() {
  return (
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
   <Route path='/mail' element={<Mail/>}/>
 </Routes>
   
  );
}

export default App;
