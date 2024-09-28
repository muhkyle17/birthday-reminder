import Image from 'next/image'
import Navbar from '@/app/components/Navbar'

export default function Home() {
  return (
    <div className='bg-[url("/home/background-home-desktop.jpg")] min-h-screen bg-contain bg-center bg-no-repeat h-screen w-full p-8 pb-20 gap-16 sm:p-20'>
      <Navbar />
    </div>
  )
}
