"use client"

import Image from 'next/image'
import * as React from "react"
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (pathname.includes(path)) {
      return 'text-primary-highlight border-b-2 border-primary border-black/20'
    }
    return 'text-primary-unactive'
  }

  const isPath = (path: string) => {
    if (pathname.includes(path)) {
      return true
    }
    return false
  }

  return (
    <>
      <div className={`flex z-10 flex-col sm:flex-col gap-2`}>
        <div className='flex flex-col sm:flex-row justify-between z-10'>
          <div className='flex flex-row justify-center sm:gap-6 items-center overflow-visible'>
            <Image src="/img/logo/logo-1-transparent.png" alt='icon' width="128" height="128" />
            <div>
              <p className='text-xl font-droidserifbold text-nowrap text-primary-highlight'>Law Firm HJ & Partners</p>
              <p className='text-xl font-balladeer text-nowrap text-primary-highlight'>Attorney At Law</p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col gap-8 text-lg items-center'>
            <span onClick={() => router.push('/home', {scroll: false})} className={`${isActive('/home')} cursor-pointer pb-2`}>Home</span>
            <span className={`${isActive('/articles')} cursor-pointer pb-2`}>Articles</span>
            <span className={`${isActive('/teams')} cursor-pointer pb-2`}>Teams</span>
            <span onClick={() => router.push('/aboutus', {scroll: false})} className={`${isActive('/aboutus')} cursor-pointer pb-2`}>About us</span>
            <span className='bg-primary-darker hover:bg-primary text-sm transition-colors duration-300 text-white px-4 py-2 rounded-md font-normal cursor-pointer'>Consultation</span>
          </div>
        </div>
      </div>
    </>
  )

}
