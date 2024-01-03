import React from 'react'

export default function SectionHeading({
    children}: {children: React.ReactNode}) {
  return <h2 className='text-4xl font-bold font-UnbuntoMono capitalize text-gray-700 mb-8 text-center dark:text-white'
        >{children}</h2>
  
}
