"use client"

import { Header, AdminNavbar } from '@/components'
import { usePathname } from 'next/navigation'

export default function admin({ children }) {

  const pathname=usePathname()
  const username = pathname.split('/')[2];

  return (
    <section className='main relative flex flex-col py-2 gap-4'>
        <Header username={username}/>
        <div className='flex w-full gap-6'>
            <AdminNavbar username={username}/>
            {children}
        </div>
    </section>
  )
}
