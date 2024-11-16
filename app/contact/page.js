'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Contact = () => {
  const router = useRouter()
  const [user, setUser] = useState({ username: '', mobile: '', email: '', desc: '' })
  const setUserData = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const sendData = async function (e) {
    e.preventDefault()
    try{
      const response = await fetch('/api/ledata', {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          mobile: user.mobile,
          email: user.email,
          desc: user.desc
        })
      })
     
      const result = await response.json()
      console.log(result);
      if(result) {
        router.push('/')  
    }
      
    }
    catch(error){
      console.log(error,'anha')
    }

  }

  return (
    <form className= ' flex flex-col color="info" items-center m-2'>
      <input className='m-1text-blue-600 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500' type='text' name='username' value={user.username} onChange={setUserData} placeholder='Username' required />
      <input className='m-1text-blue-600 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='number' name='mobile' value={user.mobile} onChange={setUserData} placeholder='Contact Number'required />
      <input className='m-1text-blue-600 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='email' name='email' value={user.email} onChange={setUserData} placeholder='Email Address' required/>
      <textarea row='5' className='m-1 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='text' name='desc' value={user.desc} onChange={setUserData} placeholder='Describe Issue' required/>
      <button className='m-1 p-1 w-100 text-center rounded-lg text-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500' onClick={sendData}  type='submit'>Submit</button>
    </form>
  )
}

export default Contact
