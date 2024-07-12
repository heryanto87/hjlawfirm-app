"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

export default function OurPracticeAccordion() {
  return (
    <>
      <div className='grid grid-flow-row sm:grid-cols-2 gap-10 mt-40'>
        <div className='row-span-1 relative flex justify-center'>
          <Image src={'/img/about-3.jpg'} width={0} height={0} sizes='100' alt='' className='rounded-xl w-4/5 shadow-lg shadow-black/50' />
        </div>
        <div className='row-span-1 flex flex-col gap-6'>
          <div className='flex flex-col gap-6 items-center sm:items-end'>
            <p className='text-primary text-6xl font-quattrocentoregular pb-4'>Our Practice</p>
            <span className='border-b-2 border-black w-1/12'></span>
          </div>
          <Accordion type="single" collapsible defaultValue='item-1'>
            <AccordionItem value="item-1">
              <AccordionTrigger>Legal Consultant</AccordionTrigger>
              <AccordionContent>
                We will review cases, analyze problems, and will provide the best
                advice to our clients, this also includes providing Legal Opinions
                and improving existing agreements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Litigation</AccordionTrigger>
              <AccordionContent>
                We will make the best efforts and court actions for the benefit of
                professional defense to defend the client's legal interests both in
                Civil, Criminal and State Administrative cases both at the Mediation,
                Police, Prosecutor's Office and Court levels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Land / Agrarian Affairs</AccordionTrigger>
              <AccordionContent>
                We make our best legal efforts to fight and defend client's legal
                interests in Land matters both in the realm of mediation at related
                agencies to lawsuit settlement in court.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Labor Law</AccordionTrigger>
              <AccordionContent>
                We advise on the legal implications of labor in Indonesia and
                improve employment agreements, employee management systems,
                and build good and dignified industrial relations within the company.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Environmental Law</AccordionTrigger>
              <AccordionContent>
                Various environmental problems that occur in Indonesia make
                us able to provide the best advice to clients about
                the implications of environmental laws applicable in Indonesia.
                And encourage clients to pay more attention to environmental
                aspects. Supporting Indonesia's environmentally friendly and
                environmentally friendly development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Licensing — (business licensing)</AccordionTrigger>
              <AccordionContent>
                We support that the Company must be established with clear licenses,
                therefore before the Company is established We will provide advice
                to clients who will establish the Company and will make the best
                efforts in obtaining business licenses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Alternative Dispute Resolution/Non-Litigation</AccordionTrigger>
              <AccordionContent>
                Dispute Resolution with all alternative solutions such as mediation,
                reconciliation, negotiation, and others deemed necessary based
                on mutual agreement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
