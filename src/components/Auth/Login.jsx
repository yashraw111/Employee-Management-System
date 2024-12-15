import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(email);
    

    const SubmitHandler = (e)=>{
        e.preventDefault()
        // console.log("hello");
        console.log("email is",email);
        console.log("password is ",password)

        setEmail("")
        setPassword("")
        
        
    }

  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={(e)=> SubmitHandler(e)}
         action="" className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required type="email" className='text-white outline-none placeholder:text-gray-300- bg-transparent border-2 border-emerald-500 py-4 px-5 text-lg rounded-full' placeholder='Enter your Email'/>
            <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required type="password" className='text-white outline-none placeholder:text-gray-300 bg-transparent border-2 border-emerald-500  py-4 mt-4 px-5 text-lg rounded-full' placeholder='Enter your PassWord'/>

            <button  className='mt-4 text-white outline-none placeholder:text-white bg-transparent border-2 bg-emerald-500 border-none  py-2 mt-4 px-5 text-lg rounded-full'  >LOG IN</button>
        </form>
        </div>

    </div>
    
    </>
  )
}

export default Login