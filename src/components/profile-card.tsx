import Image from 'next/image'
import React from 'react'

export default function ProfileCard(
  { imgsrc, name, jobTitle }:
    { imgsrc: string, name: string, jobTitle: string }
) {
  return (
    <div className='flex flex-col gap-4'>
      <Image src={imgsrc} width={0} height={0} sizes='100' alt='' className='w-full h-96 object-cover rounded-xl object-top' />
      <div>
        <p className='font-quattrocentoregular text-lg text-primary'>{name}</p>
        <p className='font-loravariable text-md text-primary-unactive'>{jobTitle}</p>
      </div>
    </div>
  )
}
