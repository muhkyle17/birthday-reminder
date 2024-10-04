'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Moon from '../../../public/destination/image-moon.png'
import Mars from '../../../public/destination/image-mars.png'
import Europa from '../../../public/destination/image-europa.png'
import Titan from '../../../public/destination/image-titan.png'

const tabs = [
  {
    id: 1,
    label: 'Moon',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    image: Moon,
    avgDistance: '384,400',
    estTravelTime: 3,
  },
  {
    id: 2,
    label: 'Mars',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    image: Mars,
    avgDistance: '225 Mil.',
    estTravelTime: 9,
  },
  {
    id: 3,
    label: 'Europa',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    image: Europa,
    avgDistance: '628 Mil.',
    estTravelTime: 3,
  },
  {
    id: 4,
    label: 'Titan',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    image: Titan,
    avgDistance: '1.6 Bil.',
    estTravelTime: 7,
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

            <div className='lg:mt-8 uppercase flex flex-col md:flex-row gap-12 md:gap-20'>
              <div className='flex flex-col gap-8'>
                <p className='text-center md:text-left typography-preset-seven text-secondary'>
                  Avg. Distance
                </p>
                <p className='text-center md:text-left typography-preset-six'>
                  {tabContent.avgDistance} km
                </p>
              </div>
              <div className='flex flex-col gap-8'>
                <p className='text-center md:text-left typography-preset-seven text-secondary'>
                  Est. Travel Time
                </p>
                <p className='text-center md:text-left typography-preset-six'>
                  {tabContent.estTravelTime} days
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const Destination = () => {
  return (
    <div className='bg-[url("/destination/background-destination-mobile.jpg")] sm:bg-[url("/destination/background-destination-tablet.jpg")] lg:bg-[url("/destination/background-destination-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto pb-20 lg:px-20 xl:px-40 mt-10 lg:mt-14 flex flex-col items-center gap-10 lg:gap-24'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 lg:self-start'>
            <span className='font-bold text-[#ffffff5f]'>01</span>
            Pick your destination
          </p>

          <HoverMiniTab />
        </div>
      </div>
    </div>
  )
}

export default Destination
