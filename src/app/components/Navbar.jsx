import Image from 'next/image'
import Logo from '@/public/shared/logo.svg'

const Navbar = () => {
  return (
    <div className='flex flex-row w-full items-center pl-16'>
      <div className='w-1/2'>
        <Image src={Logo} alt='Navigation Logo' width={48} height={48} className='opacity-50' />
      </div>
      <div className='w-1/2 bg-white// h-24 opacity-5// backdrop-blur-3xl'>
        <p>hi</p>
      </div>
    </div>
  )
}

export default Navbar
