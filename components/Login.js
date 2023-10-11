"use client";

import { Close } from '@mui/icons-material'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';

const Login = ({TocPopup}) => {

    const router = useRouter();

    const [isChecked, setIsChecked] = useState(false);

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
        e.preventDefault();
      
        try {
          const response = await fetch('http://127.0.0.1:8000/registerinfo/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });
          
          const data = await response.json();
          if(response.ok){
            router.push(`/${data.username}`)
         }else {
            throw(data)
          }
        }catch (error) {
          window.alert(error);
        }
    }
      

          
  return (
    <div className='w-full flex flex-col gap-8'>
        <h3 className='text-primary'> Login </h3>
        <form className='flex flex-col gap-8'>
            <div className='w-full'>
                <label
                    htmlFor="username"
                    className='formLabel'
                >
                    Username*
                </label>
                <input
                    type='email'
                    id='username'
                    name='username'
                    onChange={handleChange}
                    placeholder='Enter your Username'
                    className='formInput'
                    required
                />
            </div>
            <div className='w-full'>
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
            {isChecked? 
                <div className='w-full' onClick={handleSubmit}>
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