import React from 'react'

export default function SectionHeading({
    children}: {children: React.ReactNode}) {
  return <h2 className='text-3xl font-medium capitalize text-gray-700 mb-8 text-center dark:text-white stroke-2 stroke-white'
        >{children}</h2>
  
}
