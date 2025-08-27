import { useState } from 'react'
import './App.css'

const handleLogin=(e)=>{
  e.preventDefault();
  console.log("btn-clicked");
  window.location.reload();
  
}
function App() {
  return (
   <div className='flex items-center justify-center h-screen bg-gray-900'>
    <div className='bg-white rounded-lg p-8 w-96'>
      <h2
      className='text-2xl text-center font-bold text-gray-800 mb-6'
      >Login</h2>
      <form action="">
        {/* email div */}
        <div>
          <label className='block '>Email</label>
          <input type="email"  placeholder="Enter your email"
          className=' w-full px-4 py-2 border rounded-lg'
          />
        </div>
        {/* password */}
        <div>
          <label className='block mt-4'>Password</label>
          <input type="password" placeholder='enter your password' 
          className=' w-full px-4 py-2 border rounded-lg mb-4'
          />
        </div>
        {/* btn  */}
        <button className='w-58 bg-gray-500 text-white py-2 rounded-lg ml-10 mt-4'
        type="submit" onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
   </div>
  )
}
export default App

