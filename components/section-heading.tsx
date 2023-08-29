import React from 'react'

export default function SectionHeading({
    children}: {children: React.ReactNode}) {
  return <h2 className='text-3xl font-medium capitalize text-gray-950 mb-8 text-center'
        >{children}</h2>
  
}