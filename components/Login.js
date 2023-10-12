"use client";

import { Close, Password, Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';

const Login = ({TocPopup}) => {

    const router = useRouter();

    const [isChecked, setIsChecked] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [loading,setLoading] = useState(false)

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) =>{
        setForm(prevForm => ({
            ...form,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
              
        try {
          const response = await fetch('https://retoolapi.dev/2HluCH/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });
          
          const errorData = await response.json();
          if(response.ok){
            setErrorMsg(false)
            router.push(`/${form.username}`)
         }
         if(response.status === 302){
            setErrorMsg(false)
            router.push(`/useradmin/${form.username}/na`)
         }else {
            throw(errorData)
          }
        }catch (errorData) {
            setLoading(false)
          setErrorMsg(true)
          console.log("Invalid Credentials")
        }
    }
      

          
  return (
    <div className='w-full flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
            <h3 className='text-primary'> Login </h3>
            {errorMsg && <p className='text-red text-base italic'>*Invalid Credentials. Try again*</p>}
        </div>
        <form className='flex flex-col gap-8'>
            <div className='w-full'>
                <label
                    htmlFor="username"
                    className='formLabel'
                >
                    Username*
                </label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    onChange={handleChange}
                    placeholder='Enter your Username'
                    className='formInput'
                    required
                />
            </div>
            <div className='w-full relative'>
                <label
                    htmlFor="password"
                    className='formLabel'
                >
                    Password*
                </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className='formInput'
                    required
                />
            </div>
            <label className='select-none'>
                <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(prevChecked => !prevChecked)}
                className='mr-3 h-4 w-4'
                />
                I accept all <a className='text-primary cursor-pointer underline' onClick={()=>TocPopup()}>Terms and Conditions.</a>
            </label>
            {isChecked && !loading? 
                <div className='w-full' onClick={loading? null: handleSubmit}>
                    <Button type="login" />
                </div>
            :
                <Button type="loginDis" />
            }
        </form>
    </div>
  )
}

export default Login