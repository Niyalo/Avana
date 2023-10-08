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
        emailAddress: '',
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
          const response = await fetch('http://localhost:8000/registerInfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Assuming the API returns a JSON object with a "verified" property
          const data = await response.json();
      
          if (data.verified) {
            // If the email and password are verified, set "verified" to true
             router.push(`/${data.username}`);
          } else {
            // If verification fails, you can display an error message or take other actions
            // For example, show an alert
            window.alert('Email and password do not match.');
          }
        } catch (error) {
          window.alert('Error logging in:', error);
        }
      };

          
  return (
    <div className='w-full flex flex-col gap-8'>
        <h3 className='text-primary'> Login </h3>
        <form className='flex flex-col gap-8'>
            <div className='w-full'>
                <label
                    htmlFor="emailAddress"
                    className='formLabel'
                >
                    Email Address*
                </label>
                <input
                    type='email'
                    id='emailAddress'
                    name='emailAddress'
                    onChange={handleChange}
                    placeholder='Enter your Email Address'
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