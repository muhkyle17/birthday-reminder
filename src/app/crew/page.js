'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Navbar from '@/components/Navbar'
import DouglasHurley from '../../../public/crew/image-douglas-hurley.png'
import MarkShuttleworth from '../../../public/crew/image-mark-shuttleworth.png'
import VictorGlover from '../../../public/crew/image-victor-glover.png'
import AnoushehAnsari from '../../../public/crew/image-anousheh-ansari.png'

const tabs = [
  {
    id: 1,
    label: 'Douglas Hurley',
    position: 'Commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: DouglasHurley,
  },
  {
    id: 2,
    label: 'Mark Shuttleworth',
    position: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: MarkShuttleworth,
  },
  {
    id: 3,
    label: 'Victor Glover',
    position: 'Pilot',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    image: VictorGlover,
  },
  {
    id: 4,
    label: 'Anousheh Ansari',
    position: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image: AnoushehAnsari,
  },
]

const HoverMiniTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  const tabContent = tabs.find(tab => tab.id === activeTab)

  return (
    <div className='flex flex-col items-center justify-center lg:flex-row gap-10 xl:gap-28'>
      {activeTab && (
        <>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
            className='w-1/2'>
            <Image src={tabContent?.image} alt={`${tabContent.label} Image`} />
          </motion.div>

          <div className='flex flex-col items-center lg:items-start w-[70%] lg:w-1/2'>
            <div className='flex flex-row gap-10 typography-preset-eight text-secondary uppercase'>
              {tabs.map(tab => (
                <p
                  key={tab.id}
                  className={`cursor-pointer pb-3 transition-all duration-700 border-b-2 ${
                    activeTab === tab.id ? 'border-white' : 'border-transparent'
                  }`}
                  onMouseEnter={() => setActiveTab(tab.id)}>
                  {tab.label}
                </p>
              ))}
            </div>

            <h1 className='typography-preset-two uppercase mt-10'>{tabContent.label}</h1>

            <p className='typography-preset-nine py-2 text-secondary w-full text-center lg:text-left'>
              {tabContent.description}
            </p>

            <div className='mt-10 bg-[#ffffff8a] h-[0.5px]' />
          </div>
        </>
      )}
    </div>
  )
}

const Crew = () => {
  return (
    <div className='bg-[url("/crew/background-crew-mobile.jpg")] sm:bg-[url("/crew/background-crew-tablet.jpg")] lg:bg-[url("/crew/background-crew-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto pb-20 lg:px-20 xl:px-40 mt-10 lg:mt-14 flex flex-col items-center gap-10 lg:gap-24'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 lg:self-start'>
            <span className='font-bold text-[#ffffff5f]'>02</span>
            Meet your crew
          </p>

          <HoverMiniTab />
        </div>
      </div>
    </div>
  )
}

export default Crew
