"use client"

import { Clock, Mail, Phone, Pin } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Home() {
  const pathname = usePathname()
  const isPath = (path: string) => {
    if (pathname.includes(path)) {
      return true
    }
    return false
  }
  return (
    <>
      <div className={`${isPath('/home') && 'min-h-screen bg-[url("/img/background/home-bg.jpg")] bg-contain bg-no-repeat bg-right-top mix-blend-darken'}`}>
        <div className={`${isPath('/home') ? 'absolute w-full h-screen bg-main/85 -z-10' : 'hidden'}`}></div>
        <div className='grid grid-flow-row sm:grid-cols-2 gap-10 items-center py-40'>
          <div className='row-span-1 sm:ms-auto mx-auto'>
            <Image src={'/img/home-1.jpg'} sizes='100' width={0} height={0} className='w-full max-w-2xl rounded-xl shadow-xl' alt='' />
          </div>
          <div className='row-span-1 max-w-xl me-auto flex flex-col gap-10 px-10  '>
            <span className='text-3xl font-cinzelregular text-wrap'>LAW FIRM HJ & PARTNERS</span>
            <p className='text-md font-loravariable'>With more than 25 years of experience in the
              world of law practice we continue to maintain
              integrity, quality and continue to uphold the
              morality of our profession in carrying out
              every business in your legal interests,
              it makes a basic principle of our law firm
              in solving every case we resolve.</p>
            <span className='px-4 py-2 bg-main-box shadow-xl w-fit rounded-lg cursor-pointer text-sm font-light'>Learn More</span>
          </div>
        </div>
      </div>
      <div className='w-screen bg-slate-500 text-white flex sm:flex-row flex-col gap-4 py-20 px-32 -mx-20'>
        <div className='flex flex-col gap-6'>
          <Image src={'/users.svg'} sizes='100' width={0} height={0} className='w-16' alt='' />
          <p className='text-2xl font-quattrocentoregular'>Client Satisfactions</p>
          <p className='text-md font-sans'>Client satisfaction is our top priority. We strive to exceed your expectations with exceptional legal services and dedicated support, ensuring your success every step of the way.</p>
        </div>
        <div className='flex flex-col gap-6'>
          <Image src={'/book-lock.svg'} sizes='100' width={0} height={0} className='w-16' alt='' />
          <p className='text-2xl font-quattrocentoregular'>Confidential</p>
          <p className='text-md font-sans'>We are committed to protecting your information and ensuring your privacy. You can trust that your sensitive data is secure with us, and the details of your case will remain confidential.</p>
        </div>
        <div className='flex flex-col gap-6'>
          <Image src={'/scale.svg'} sizes='100' width={0} height={0} className='w-16' alt='' />
          <p className='text-2xl font-quattrocentoregular'>Legal Protection</p>
          <p className='text-md font-sans'>We offer comprehensive legal protection for our clients, prioritizing your rights and interests. You can be confident that your legal rights are fully safeguarded with us.</p>
        </div>
      </div>
      <div className='w-full flex flex-row py-40 px-20'>
        <div className='flex flex-col gap-6'>
          <p className='text-5xl font-quattrocentoregular'>Consultation</p>
          <p className='text-md font-sans'>Navigating the law can be complicated and neglecting it may cause serious issues. Let us help you!</p>
          <div className='flex flex-col gap-8'>
            <span className='flex flex-row gap-4'>
              <Phone className='text-primary-highlight' size={24} />
              <p className=''>021-29490603</p>
            </span>
            <span className='flex flex-row gap-4'>
              <Mail className='text-primary-highlight' size={24} />
              <p className=''>justice@lawfirmhj.com</p>
            </span>
            <span className='flex flex-row gap-4'>
              <Clock className='text-primary-highlight' size={24} />
              <p className=''>Mon - Fri 9.00 - 17.00</p>
            </span>
            <span className='flex flex-row gap-4 text-wrap'>
              <Pin className='text-primary-highlight min-w-6' size={24} />
              <div className='flex flex-col gap-2'>
                <span>
                  <p className='font-bold'>Head Office</p>
                  <p className='text-md'>Menara Rajawali Level 7-1 Jl. DR Ide Anak Agung Gde Agung, Kawasan Mega Kuningan,
                    Jakarta Selatan 12950.</p>
                </span>
                <span>
                  <p className='font-bold'>Branch Office</p>
                  <p className='text-md'>Ruko The Hive Parc 1 No. 81 Lt.2 Lippo Village, Kelurahan Kadu, Kecamatan Curug
                    Kabupaten Tangerang 15810.</p>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className='w-full ps-20'>
          <form action="" className='flex flex-col gap-8'>
            <div className='flex flex-row gap-4'>
              <input className='w-full p-6' type="text" placeholder='First Name' autoComplete='off' />
              <input className='w-full p-6' type="text" placeholder='Last Name' autoComplete='off' />
            </div>
            <div className='flex flex-row gap-4'>
              <input className='w-full p-6' type="text" placeholder='Email' autoComplete='off' />
              <input className='w-full p-6' type="text" placeholder='Phone' autoComplete='off' />
            </div>
            <textarea className='w-full p-6' placeholder='Message' />
            <button className='p-6 bg-primary-darker text-white font-semibold uppercase tracking-widest font-quattrocentoregular'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
