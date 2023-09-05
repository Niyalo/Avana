import React from 'react'
import projects from '@/content/projects'
import { Button, Topbar } from '@/components'

const vp = () => {

    const projectList = projects.map(items => (
        <div className="w-full px-8 py-4 border border-grey50 rounded-sm justify-start items-center gap-6 inline-flex hover:shadow-sm hover:scale-[1.01] hover:bg-white100">
        <p className="text-sm">{items.id}</p>
        <div className="grow shrink basis-0 justify-between items-center flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <p>{items.name}</p>
                <p className='text-sm'>{items.assgn}</p>
            </div>
            <Button label={`${items.assgn=="Unassigned"? `Enroll Programmers` : `Edit Programmers`}`} type= {`${items.assgn=="Unassigned"? `add` : `edit`}`} />
        </div>
        </div>
    ))

  return (
    <div className='adminContent flex flex-col gap-6'>
      <h2 className='px-2'>View Projects</h2>
      <Topbar label1="All" label2="Unassigned" label3="Assigned"/>
      <div className='flex flex-col gap-2 overflow-y-scroll overflow-x-auto px-2 pr-4'>
        {projectList}
      </div> 
    </div>
  )
}

export default vp