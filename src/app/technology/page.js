'use client'

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
  },
  {
    id: 2,
    technology: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    id: 3,
    technology: 'Space Capsule',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

const HoverMiniTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  // const tabContent = tabs.find(tab => tab.id === activeTab)

  return (
    <div>
      <p>Hover Mini Tab</p>
    </div>
  )
}

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

          <HoverMiniTab />
        </div>
      </div>
    </div>
  )
}

export default Technology
