import Image from 'next/image'
import Logo from '@/public/shared/logo.svg'

const Navbar = () => {
  return (
    <div className='flex flex-row w-full items-center pl-16'>
      <div className='w-1/2 flex flex-row items-center justify-between'>
        <Image src={Logo} alt='Navigation Logo' width={48} height={48} className='opacity-50' />

        <hr className='bg-white opacity-30 w-5/6' />
      </div>

      <div className='w-1/2 flex flex-row items-center gap-24 h-24 backdrop-blur-3xl '>
        <hr className='bg-white w-10 opacity-30' />

        <div className='flex flex-row items-center gap-10 uppercase'>
          <p className='flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>00</span>Home
          </p>
          <p className='flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>01</span>Destination
          </p>
          <p className='flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>00</span>Crew
          </p>
          <p className='flex flex-row gap-2 items-baseline'>
            <span className='typography-preset-eight font-bold'>00</span>Technology
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
