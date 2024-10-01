import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Moon from '../../../public/destination/image-moon.png'

const Destination = () => {
  return (
    <div className='bg-[url("/destination/background-destination-mobile.jpg")] sm:bg-[url("/destination/background-destination-tablet.jpg")] lg:bg-[url("/destination/background-destination-desktop.jpg")] bg-cover bg-no-repeat w-screen h-screen min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto px-40 mt-20 flex flex-col gap-24'>
          <p className='uppercase typography-preset-five flex flex-row gap-6'>
            <span className='font-bold text-[#ffffff5f]'>01</span>
            Pick your destination
          </p>

          <div className='flex flex-row gap-28'>
            <Image src={Moon} />
            <div className='flex flex-col'>
              <div className='flex flex-row gap-10 typography-preset-eight text-secondary uppercase'>
                <div>Moon</div>
                <div>Mars</div>
                <div>Europa</div>
                <div>Titan</div>
              </div>

              <h1 className='typography-preset-two uppercase mt-10'>Moon</h1>

              <p className='typography-preset-nine text-secondary'>
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                regain perspective and come back refreshed. While you’re there, take in some history
                by visiting the Luna 2 and Apollo 11 landing sites.
              </p>

              <div className='mt-10 bg-[#ffffff8a] h-[0.5px]' />

              <div className='mt-12 uppercase flex flex-row gap-20'>
                <div className='flex flex-col gap-8'>
                  <p className='typography-preset-seven text-secondary'>Avg. Distance</p>
                  <p className='typography-preset-six'>384,400 km</p>
                </div>
                <div className='flex flex-col gap-8'>
                  <p className='typography-preset-seven text-secondary'>Est. Travel Time</p>
                  <p className='typography-preset-six'>3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
