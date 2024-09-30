import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../public/shared/logo.svg'
import NavMobile from '@/components/NavMobile'

const navigation = [
  {
    id: '00',
    href: '/',
    name: 'Home',
  },
  {
    id: '01',
    href: '/destination',
    name: 'Destination',
  },
  {
    id: '02',
    href: '/crew',
    name: 'Crew',
  },
  {
    id: '03',
    href: '/technology',
    name: 'Technology',
  },
]

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
          {navigation.map(item => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className='nav-button flex flex-row gap-2 items-baseline'>
                <span className='typography-preset-eight font-bold'>{item.id}</span>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>

      <div className='md:hidden'>
        <NavMobile />
      </div>
    </div>
  )
}

export default Navbar
