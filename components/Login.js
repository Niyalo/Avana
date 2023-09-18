"use client";

import { Close } from '@mui/icons-material'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './Button';

const Login = ({TocPopup}) => {

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
                I accept all <a onClick={()=>TocPopup()}>Terms and Conditions.</a>
            </label>
            {isChecked? 
                <Link href="/admin/vp" className='w-full'>
                    <Button type="login" />
                </Link>
            :
                <Button type="loginDis" />
            }
        </form>
    </div>
  )
}

export default Login