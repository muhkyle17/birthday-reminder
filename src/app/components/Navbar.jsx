import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/shared/logo.svg'
import NavMobile from '@/src/app/components/NavMobile'

const Navbar = () => {
  return (
    <div className='px-10 pt-7 md:pt-0 md:px-0 flex flex-row w-full items-center justify-between'>
      <div className='w-1/6 xl:w-1/2 flex flex-row items-center justify-center lg:justify-between lg:pl-16'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Navigation Logo'
            width={48}
            height={48}
            className='opacity-50 hover:opacity-65'
          />
        </Link>

        <hr className='bg-white opacity-30 w-5/6 mb-1 hidden xl:block' />
      </div>

      <div className='w-5/6 hidden xl:w-1/2 md:flex flex-row items-center justify-end pr-8 xl:justify-between h-24 bg-white bg-opacity-5 lg:backdrop-blur-3xl lg:pr-16'>
        <hr className='bg-white w-10 opacity-30 mb-1 hidden xl:block' />

        <div className='flex flex-row items-center gap-10 uppercase'>
          <Link href='/' className='nav-button flex flex-row gap-2 items-baseline'>
            <span className='hidden lg:block typography-preset-eight font-bold'>00</span>Home
          </Link>
          <Link href='/' className='nav-button flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>01</span>Destination
          </Link>
          <Link href='/' className='nav-button flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>02</span>Crew
          </Link>
          <Link href='/' className='nav-button flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>03</span>Technology
          </Link>
        </div>
      </div>

      <div className='md:hidden'>
        <NavMobile />
      </div>
    </div>
  )
}

export default Navbar
