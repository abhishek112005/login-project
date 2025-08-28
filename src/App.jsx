import { useState } from 'react'
import './App.css'
function App() {
  // useStates
// email-->var stores val
// setEmail--> used for setting and clearing the email var value
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handleLogin= async (e)=>{
  e.preventDefault();
  console.log("btn-clicked");
  if(email && password){
  console.log("Entered email is: ",email);
  console.log("Entered password is: ",password);
  alert("Details sent to console")
  }else{
    alert("please enter mail and password!")
  }
  // sending the mail and password to txt file

  try{
    // write post req(as it is safe for this txt file)
    const res= await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email,password})
    })

    const data=await res.json();

    if(!res.ok)
    {
      alert("something went wrong");
      return;
    }
    alert("sucessfully sent to backend(txt file")
      // clear the varaibales
  setEmail("");
  setPassword("");
  // window.location.reload();

  }catch(err){
    console.log(err);
    alert("something went wrong");
    return;
    
  }


  
}
  return (
   <div className='flex items-center justify-center h-screen bg-gray-900'>
    <div className='bg-white rounded-lg p-8 w-96'>
      <h2
      className='text-2xl text-center font-bold text-gray-800 mb-6'
      >Login</h2>
      <form action="" onSubmit={handleLogin}>
        {/* email div */}
        <div>
          <label className='block '>Email</label>
          <input type="email"  placeholder="Enter your email"
          className=' w-full px-4 py-2 border rounded-lg'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
        </div>
        {/* password */}
        <div>
          <label className='block mt-4'>Password</label>
          <input type="password" placeholder='enter your password' 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className=' w-full px-4 py-2 border rounded-lg mb-4'
          />
        </div>
        {/* btn  */}
        <button className='w-58 bg-gray-500 text-white py-2 rounded-lg ml-10 mt-4'
        type="submit"
        >
          Login
        </button>
      </form>
    </div>
   </div>
  )
}
export default App

