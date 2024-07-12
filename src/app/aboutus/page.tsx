"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import ProfileCard from '@/components/profile-card'
import TeamsCarousel from '@/components/teams-carousel'
import OurPracticeAccordion from '@/components/our-practice-accordion'
import Location from '@/components/location'

export default function Aboutus() {
  return (
    <>
      <div className='flex flex-col gap-10 w-full justify-center items-center p-20'>
        <p className='text-primary font-thin text-5xl font-cinzelregular'>About HJ & Partners</p>
        <span className='border-b-2 border-black w-1/5'></span>
      </div>
      <div className='grid grid-flow-row sm:grid-cols-2 gap-10'>
        <div className='row-span-1 flex flex-col gap-6 items-center sm:items-start'>
          <p className='text-primary text-6xl font-quattrocentoregular pb-4'>Our Story</p>
          <span className='border-b-2 border-black w-1/12'></span>
          <Image src={'/img/about-1.jpg'} width={0} height={0} sizes='100' alt='' className='rounded-xl w-full shadow-lg shadow-black/50 sm:hidden' />
          <div className='text-primary font-loravariable text-lg flex flex-col gap-4 text-center sm:text-start'>
            <p>In the activities of the <b>business world</b>, the position of <b>law</b> is becoming
              increasingly important and significant.
            </p>
            <p>
              Law is no longer seen as only a complementary factor in a <b>business
                activity</b> in a company, but on the contrary law
              has played a role and become an important factor
              as dominant part in a <b>modern company
                management.</b>
            </p>
            <p>
              <b>HJ & Partners Law Firm</b> was established based
              on <b>legal provisions</b> with a commitment to
              provide the best and <b>professional legal services </b>
              for the <b>benefit of clients</b>.
            </p>
            <p>
              In carrying out of legal service activities we
              will explore negotiation efforts for the resolution
              of problems faced by prioritizing Peace through
              <b> Mediation, Conciliation, Arbitration and Litigation efforts, </b>
              to enable our clients to achieve <b>success</b>.
            </p>
          </div>
        </div>
        <div className='row-span-1 relative'>
          <Image src={'/img/about-1.jpg'} width={0} height={0} sizes='100' alt='' className='rounded-xl shadow-lg shadow-black/50 w-full hidden sm:block' />
        </div>
      </div>
      <OurPracticeAccordion />
      <TeamsCarousel />
      <Location />
    </>
  )
}
