import React from 'react'
import applications from '@/content/applications'

const na = () => {

  const applicationList = applications.map(items => (
    <div className="cursor-pointer w-full px-8 py-4 border bg-white0 border-grey50 rounded-sm justify-start items-center gap-6 inline-flex hover:shadow-sm hover:scale-[1.01] hover:bg-white100">
    <p className="text-sm">{items.id}</p>
    <div className="grow shrink basis-0 justify-between items-center flex">
        <div className="flex-col justify-start items-start gap-1 inline-flex">
            <p>{items.name}</p>
            <p className='text-sm'>Request By: {items.request}</p>
        </div>
    </div>
    </div>
  ))

  return (
    <div className='adminContent flex flex-col gap-6'>
      <h2 className='px-2'>New Application</h2>
      <div className='flex flex-col gap-2 overflow-y-scroll overflow-x-auto px-2 pr-4'>
        {applicationList}
      </div> 
    </div>
  )
}

export default na