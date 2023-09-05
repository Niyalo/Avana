"use client"

import React, { useState } from 'react'
import profile from '@/content/profile'
import { Button, ProgProfile } from '@/components'
import Image from 'next/image'

const pp = () => {

    const [popup, setPopup] = useState(false)

  const programmers = profile.map(items => (
    <div onClick={() => setPopup(true)} className="cursor-pointer w-full px-8 py-4 border bg-white0 border-grey50 rounded-sm justify-start items-center gap-6 inline-flex hover:shadow-sm hover:scale-[1.01] hover:bg-white100">
    <p className="text-sm">{items.id}</p>
    <div className="grow shrink basis-0 justify-between items-center flex">
        <div className='flex gap-4 items-center'>
            <Image src={`/${items.src}`} width={50} height={50} layout="fixed" className='border-2 h-[50px] object-cover object-top overflow-hidden rounded-full border-secondary'/>
            <div className='flex flex-col'>
                <p className='text-primary'>{items.name}</p>
                <p className='text-sm'>{items.title}</p>
            </div>
        </div>
        <Button label="Send message" type='primary' className='text-sm bg-secondary'/>
    </div>
    </div>
  ))

  return (
    <div className='adminContent relative flex flex-col gap-6'>
      <h2 className='px-2'>Programmers Profile</h2>
      <div className='flex flex-col gap-2 overflow-y-scroll overflow-x-auto px-2 pr-4'>
        {programmers}
      </div> 
      <ProgProfile isVisible={popup} onClose={() => setPopup(false)}/>
    </div>
  )
}

export default pp