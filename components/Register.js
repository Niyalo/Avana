"use client";

import { Close } from '@mui/icons-material'
import React, { Fragment, useState } from 'react'
import Link from 'next/link';

const Register = ({isVisible, onClose}) => {

    const [popup, setPopup] = useState("none")
    const [selectedImage, setSelectedImage] = useState("");

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        homeAddress: '',
        emailAddress: '',
        password:'',
        confPassword:'',
        phone: '',
        username: '',
        gender: ''
    })

    const handleChange = (e) =>{
        setForm(prevForm => ({
            ...form,
            [e.target.name] : e.target.value
        }))
        if (form.username=="halfguy") {
            setPopup("username")
        }
        if(form.emailAddress=="nothalfguy@gmail.com"){
            setPopup("emailAddress")
        }
        if(form.emailAddress=="nothalfguy@gmail.com" && form.username=="halfguy"){
            setPopup("userAddress")
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        setForm((prevForm) => ({
          ...prevForm,
          profImage: file // Store the file object in the form state
        }));
      };

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
    
          // You can handle success here, e.g., redirect to a new page
          window.alert('You have successfully Registered. Check your mail');
    
        } catch (error) {
          window.alert('Error Registering', error);
        }
      };

    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id==="closer") return onClose()
    }

  return (
    <div id="closer" onClick={handleClose} className='bg-black100 bg-opacity-25 fixed w-screen h-screen z-10 flex items-center justify-center backdrop-blur-sm'>
        <div className='main relative flex flex-col mx-80 h-4/5 p-6 bg-white50 rounded-sm gap-8 shadow-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary'> Register </h3>
                <div onClick={() => onClose()}><Close className='text-3xl rounded-sm hover:scale-105 border bg-red cursor-pointer text-white50'/></div>
            </div>
            <form className='flex flex-col gap-8 pr-4 overflow-y-scroll' onSubmit={handleSubmit}>
                <div className='flex gap-6'>
                    <div className='w-full'>
                        <label
                            htmlFor="firstName"
                            className='formLabel'
                        >
                            First Name*
                        </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            onChange={handleChange}
                            placeholder='Enter your First Name'
                            className='formInput'
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label
                            htmlFor="lastName"
                            className='formLabel'
                        >
                            Last Name*
                        </label>
                        <input
                            type='text'
                            id='lastName'
                            name='lasName'
                            onChange={handleChange}
                            placeholder='Enter your Last Name'
                            className='formInput'
                            required
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <label
                        htmlFor="homeAddress"
                        className='formLabel'
                    >
                        Home Address*
                    </label>
                    <input
                        type='text'
                        id='homeAddress'
                        name='homeAddress'
                        onChange={handleChange}
                        placeholder='Enter your Home Address'
                        className='formInput'
                        required
                    />
                </div>
                <div className='w-full'>
                    <label
                        htmlFor="emailAddress"
                        className='formLabel'
                    >
                        Personal Email Address*
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
                        Enter Password*
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
                <div className='w-full'>
                    <label
                        htmlFor="confPassword"
                        className='formLabel'
                    >
                        Confirm Password*
                    </label>
                    <input
                        type='password'
                        id='confPassword'
                        name='confPassword'
                        onChange={handleChange}
                        placeholder='Confirm your password'
                        className='formInput'
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <div className='flex w-full flex-col gap-8'>
                        <div className='w-full'>
                            <label
                                htmlFor="phone"
                                className='formLabel'
                            >
                                Phone Numnber*
                            </label>
                            <input
                                type='number'
                                id='phone'
                                name='phone'
                                onChange={handleChange}
                                placeholder='Enter your Phone Number'
                                className='formInput appearance-none'
                                required
                            />
                        </div>
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
                                className='formInput appearance-none'
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <label
                                className='formLabel mb-2'
                            >
                                Gender*
                            </label>
                            
                            <div className='flex w-full justify-between'>
                                <label><input id='gender' type="radio" name="gender" value="male" onChange={handleChange} className='m-0' required/> Male</label>
                                <label><input id='gender' type="radio" name="gender" value="female" onChange={handleChange} className='m-0' required/> Female</label>
                                <label><input id='gender' type="radio" name="gender" value="other" onChange={handleChange} className='m-0' required/> Other</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full ml-24 mt-8 space-y-4">
                        <label>
                            <input
                            type="file"
                            hidden
                            onChange={({ target }) => {
                                if (target.files) {
                                const file = target.files[0];
                                setSelectedImage(URL.createObjectURL(file));
                                 }
                            }}
                            />
                            <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                            {selectedImage ? (
                                <img src={selectedImage} alt="" className='h-[100px] object-cover'/>
                            ) : (
                                <span>Select Image</span>
                            )}
                            </div>
                        </label>
                        <button
                                   className="bg-primary whitespace-nowrap p-3 text-center rounded text-white0"
                        >
                            Upload Image
                        </button>
                    </div>
                </div>
                <input
                    type='submit'
                    value="Register"
                    className='w-full flex h-max border text-white50 justify-center border-secondary gap-2 bg-primary py-2 px-4 rounded-full items-center cursor-pointer'
                />
            </form>
            <div className={`${popup=="username"? 'fixed': 'hidden'} absolute flex self-center w-full h-max bottom-0 items-center justify-center`}>
                <div className='flex text-center w-full flex-col p-3 bg-white50 rounded-sm gap-8 shadow-lg'>
                    <p className='text-red'>The Username already exists</p>
                </div>
            </div>
            <div className={`${popup=="emailAddress"? 'fixed': 'hidden'} absolute flex self-center w-full h-max bottom-0 items-center justify-center`}>
                <div className='flex text-center w-full flex-col p-3 bg-white50 rounded-sm gap-8 shadow-lg'>
                    <p className='text-red'>The Email already exists</p>
                </div>
            </div>
            <div className={`${popup=="userAddress"? 'fixed': 'hidden'} absolute flex self-center w-full h-max bottom-0 items-center justify-center`}>
                <div className='flex text-center w-full flex-col p-3 bg-white50 rounded-sm gap-8 shadow-lg'>
                    <p className='text-red'>The Email and Username already exists</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register