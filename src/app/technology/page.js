'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import LaunchVehiclePortrait from '../../../public/technology/image-launch-vehicle-portrait.jpg'
import LaunchVehicleLandscape from '../../../public/technology/image-launch-vehicle-landscape.jpg'
import SpaceportPortrait from '../../../public/technology/image-spaceport-portrait.jpg'
import SpaceportLandscape from '../../../public/technology/image-spaceport-landscape.jpg'
import SpaceCapsulePortrait from '../../../public/technology/image-space-capsule-portrait.jpg'
import SpaceCapsuleLandscape from '../../../public/technology/image-space-capsule-landscape.jpg'

const tabs = [
  {
    id: 1,
    technology: 'Launch Vehicle',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortrait: LaunchVehiclePortrait,
    imageLandscape: LaunchVehicleLandscape,
  },
  {
    id: 2,
    technology: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    imagePortrait: SpaceportPortrait,
    imageLandscape: SpaceportLandscape,
  },
  {
    id: 3,
    technology: 'Space Capsule',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagePortrait: SpaceCapsulePortrait,
    imageLandscape: SpaceCapsuleLandscape,
  },
]

let width
let height

if (typeof window !== 'undefined') {
  width = window.innerWidth
  height = window.innerHeight
}

const HoverMiniTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [windowDimensions, setWindowDimensions] = useState({
    width: width,
    height: height,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log(windowDimensions, 'windowDimensions')

  const tabContent = tabs.find(tab => tab.id === activeTab)

  return (
    <div className='flex flex-row w-full h-full'>
      {activeTab && (
        <div className='w-1/2 flex flex-row items-center justify-start gap-14'>
          <div className='flex flex-col gap-10'>
            {tabs.map(tab => {
              return (
                <p
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id ? 'bg-white text-primary' : 'bg-transparent'
                  } flex items-center justify-center w-20 h-20 typography-preset-four border border-white rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-500`}>
                  {tab.id}
                </p>
              )
            })}
          </div>
          <div className='flex flex-col gap-10'>
            <h1 className='typography-preset-four text-[#ffffff5f]'>THE TERMINOLOGY…</h1>
            <h2 className='typography-preset-three uppercase'>{tabContent.technology}</h2>
            <p className='typography-preset-nine'>{tabContent.description}</p>
          </div>
        </div>
      )}
      <div className='w-1/2 flex items-center justify-end'>
        <Image src={tabContent.imagePortrait} alt={`Picture`} />
      </div>
    </div>
  )
}

const Technology = () => {
  return (
    <div className='bg-[url("/technology/background-technology-mobile.jpg")] sm:bg-[url("/technology/background-technology-tablet.jpg")] lg:bg-[url("/technology/background-technology-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container ml-auto mb-20 pl-10 lg:pl-20 xl:pl-0 mt-10 lg:mt-14 flex flex-col items-center gap-10 h-full'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 md:self-start'>
            <span className='font-bold text-[#ffffff5f]'>03</span>
            Space Launch 101
          </p>

          <HoverMiniTab />
        </div>
      </div>
    </div>
  )
}

export default Technology
