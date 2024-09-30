import Link from 'next/link'
import * as motion from 'framer-motion/client'

import Navbar from '@/src/app/components/Navbar'

export default function Home() {
  return (
    <div className='bg-[url("/home/background-home-mobile.jpg")] sm:bg-[url("/home/background-home-tablet.jpg")] lg:bg-[url("/home/background-home-desktop.jpg")] bg-cover lg:bg-right bg-no-repeat w-screen h-screen min-h-screen '>
      <div className='flex flex-col items-center lg:justify-between pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mt-20 lg:mt-0 lg:px-16 pb-10 lg:pb-32 flex flex-col items-center lg:flex-row gap-24 md:gap-12 lg:gap-0 justify-between w-full'>
          <div className='w-[80%] xl:w-1/2 flex flex-col gap-6 sm:gap-0'>
            <p className='responsive-font-size typography-preset-five uppercase text-center lg:text-left'>
              So, you want to travel to
            </p>
            <p className='typography-preset-two sm:typography-preset-one text-center lg:text-left'>
              SPACE
            </p>
            <p className='typography-preset-nine -mt-6 text-center lg:text-left'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </p>
          </div>

          <div className='flex items-center justify-center xl:justify-end xl:pr-10 sm:w-1/2'>
            <motion.a
              whileHover={{ scale: 1.0 }}
              href='/'
              className='relative rounded-full cursor-pointer typography-preset-four bg-white uppercase text-primary w-[200px] h-[200px] md:w-[272px] md:h-[272px] flex items-center justify-center'>
              <motion.div
                whileHover={{ scale: 1.5 }}
                className='absolute rounded-full bg-[#ffffff1b] w-[200px] h-[200px] md:w-[272px] md:h-[272px]'></motion.div>
              Explore
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
