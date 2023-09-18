"use client";

import { Close } from '@mui/icons-material'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './Button';

const Login = () => {

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
        <form className='flex flex-col gap-11'>
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
            <Link href="/admin/vp" className='w-full'>
                <Button type="login" />
            </Link>
        </form>
    </div>
  )
}

export default Login