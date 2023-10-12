"use client";

import { Header, Topbar, Button } from '@/components'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { LocationCity, Mail, Phone } from '@mui/icons-material';
import { usePathname } from 'next/navigation';


const profile = () => {
  const pathname = usePathname()
  const username = pathname.split('/')[1];
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`localhost:8000/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

    const enrolledProjects = userData? userData.enrolled_projects.map(items => (
        <div className="w-full px-8 py-4 border-t border-b border-zinc-400 justify-start items-center gap-6 inline-flex hover:shadow-sm hover:scale-[1.01] hover:bg-white100">
        <p className="text-sm">{items.id}</p>
        <div className="grow shrink basis-0 justify-between items-center flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <p>{items.project_name}</p>
                <p className='text-sm overflow-hidden'>{items.project-description}</p>
            </div>
            <Button label="Learn more" type= "text" />
        </div>
        </div>
    )):null

    const availableProjects = userData? userData.not_enrolled_projects.map(items => (
        <div className="w-full px-8 py-4 border-t border-b border-zinc-400 justify-start items-center gap-6 inline-flex hover:shadow-sm hover:bg-white100">
        <p className="text-sm">{items.id}</p>
        <div className="grow shrink basis-0 justify-between items-center flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <p>{items.project_name}</p>
                <p className='text-sm overflow-hidden'>{items.project_description}</p>
            </div>
            <Button label="Request Enrollment" type= "add" className='text-sm'/>
        </div>
        </div>
    )):null

    return (
        <div className='main flex flex-col py-4 gap-10'>
            <Header username={userData.username}/>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src="http://35.232.216.253/uploads/original/f8/88/6bee943c18b8ba921f7eed571af2.jpg" width={80} height={80} layout="fixed" className='border-2 h-[80px] object-cover object-top overflow-hidden rounded-full border-secondary'/>
                    <div className='flex flex-col'>
                        <h3 className='text-primary'>{userData.firstName} {userData.lastName}</h3>
                        <p>{userData.title}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                   <div className='flex gap-4'><Mail className='text-xl text-primary'/><p>{userData.email}</p></div>
                   <div className='flex gap-4'><LocationCity className='text-xl text-primary' /><p>{userData.homeAddress}</p></div>
                   <div className='flex gap-4'><Phone className='text-xl text-primary' /><p>{userData.phone}</p></div>
                </div>
            </div>
            <div className='flex h-[400px] gap-6 w-full'>
                <div className='bg-white50 shadow-lg h-full w-full rounded-sm relative'>
                    <Topbar label1="Current" label2="Completed" label3="Cancelled" />
                    <div className='flex flex-col mt-4 h-5/6 w-full overflow-y-scroll overflow-x-hidden'>
                        {enrolledProjects}
                    </div>
                </div>
                <div className='bg-white50 shadow-lg h-full w-full rounded-sm'>
                    <h3 className='text-green px-6 py-2'>Available Projects</h3>
                    <div className='flex flex-col mt-4 h-5/6 w-full overflow-y-scroll overflow-x-hidden'>
                        {availableProjects}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile