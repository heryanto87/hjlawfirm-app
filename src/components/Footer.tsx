"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Phone, Mail, Pin, Clock } from 'lucide-react'

const Footer = () => {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className='w-full h-auto bg-black text-white'>
        <div className='bg-white/10 flex sm:flex-row flex-col'>
          <div className='flex flex-col p-20'>
            <Image src='/img/logo/logo-1-transparent.png' alt='logo' width={0} height={0} sizes='100' className='w-20' />
            <div>
              <p className='text-xl font-droidserifbold text-nowrap text-primary-highlight'>Law Firm HJ & Partners</p>
              <p className='text-xl font-balladeer text-nowrap text-primary-highlight'>Attorney At Law</p>
            </div>
          </div>
          <div className='p-20 flex flex-col gap-8'>
            <p className='text-xl font-quattrocentoregular text-white'>Contact Info</p>
            <span className='flex flex-row gap-4'>
              <Phone className='text-primary-highlight' size={24} />
              <p className='font-thin '>021-29490603</p>
            </span>
            <span className='flex flex-row gap-4'>
              <Mail className='text-primary-highlight' size={24} />
              <p className='font-thin'>justice@lawfirmhj.com</p>
            </span>
            <span className='flex flex-row gap-4'>
              <Clock className='text-primary-highlight' size={24} />
              <p className='font-thin'>Mon - Fri 9.00 - 17.00</p>
            </span>
            <span className='flex flex-row gap-4 text-wrap'>
              <Pin className='text-primary-highlight min-w-6' size={24} />
              <div className='flex flex-col gap-2'>
                <span>
                  <p className='font-bold'>Head Office</p>
                  <p className='font-thin'>Menara Rajawali Level 7-1 Jl. DR Ide Anak Agung Gde Agung, Kawasan Mega Kuningan,
                    Jakarta Selatan 12950.</p>
                </span>
                <span>
                  <p className='font-bold'>Branch Office</p>
                  <p className='font-thin'>Ruko The Hive Parc 1 No. 81 Lt.2 Lippo Village, Kelurahan Kadu, Kecamatan Curug
                    Kabupaten Tangerang 15810.</p>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className='bg-black flex flex-row px-16 py-8'>
          <span>
            <p className='font-thin'>Copyright © 2024 Law Firm HJ, All Right Reserved</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer