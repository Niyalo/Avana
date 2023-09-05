import React from 'react'
import Image from 'next/image'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@/components'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <Image 
          src='/avana_logo.svg'
          width={100}
          height={100}
          alt='Avana Logo'
        />
        <div className='flex gap-6 items-center'>
            <p>Half Guy</p>
            <Button type="logout" />
        </div>
    </div>
  )
}

export default Header