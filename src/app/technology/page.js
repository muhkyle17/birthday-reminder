'use client'

import Navbar from '@/components/Navbar'
import LaunchVehiclePortrait from '../../../public/technology/image-launch-vehicle-portrait.jpg'
import LaunchVehicleLandscape from '../../../public/technology/image-launch-vehicle-landscape.jpg'
import SpaceportPortrait from '../../../public/technology/image-spaceport-portrait.jpg'
import SpaceportLandscape from '../../../public/technology/image-spaceport-landscape.jpg'
import SpaceCapsulePortrait from '../../../public/technology/image-space-capsule-portrait.jpg'
import SpaceCapsuleLandscape from '../../../public/technology/image-space-capsule-landscape.jpg'

const Technology = () => {
  return (
    <div className='bg-[url("/technology/background-technology-mobile.jpg")] sm:bg-[url("/technology/background-technology-tablet.jpg")] lg:bg-[url("/technology/background-technology-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto mb-20 px-10 lg:px-20 xl:px-40 mt-10 lg:mt-14 flex flex-col items-center gap-10'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 md:self-start'>
            <span className='font-bold text-[#ffffff5f]'>02</span>
            Space Launch 101
          </p>
        </div>
      </div>
    </div>
  )
}

export default Technology
