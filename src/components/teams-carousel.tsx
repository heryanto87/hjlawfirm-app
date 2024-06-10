import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProfileCard from '@/components/profile-card'

export default function TeamsCarousel() {
  return (
    <>
      <div className='absolute bg-main-box w-full h-96 -mx-16 mt-14 -z-10'></div>
      <div className='w-full mt-20 flex flex-col gap-6'>
        <div className='flex flex-col gap-6 items-center'>
          <p className='text-primary text-6xl font-quattrocentoregular pb-4'>Our Teams</p>
          <span className='border-b-2 border-black w-1/12'></span>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/hanafi.png' name='Dr. Hanafi Tanawijaya, S.H., M.Hum' jobTitle='Managing Partner' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/hutomo.png' name='Hutomo Lim, S.T., S.H.' jobTitle='Managing Partner' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/nurijlal.png' name='Nurijlal Hafizh Syah, S.H.' jobTitle='Associate Lawyer' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/arie.png' name='Arie Juwaeny, S.H.' jobTitle='Associate Lawyer' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/akhmad.png' name='Akhmad Suhardi, S.H.,M.H.' jobTitle='Associate Lawyer' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/cindy.png' name='Cindy Cintya Lauren, S.H.' jobTitle='Associate Lawyer' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/ridho.png' name='Ridho Harry Setiawan, S.H.' jobTitle='Associate Lawyer' /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5"><ProfileCard imgsrc='/img/profile/willy.png' name='Willy Wardhana, S.H.' jobTitle='Associate Lawyer' /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
