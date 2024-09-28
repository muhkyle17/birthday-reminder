import Navbar from '@/src/app/components/Navbar'

export default function Home() {
  return (
    <div className='bg-[url("/home/background-home-desktop.jpg")] bg-cover bg-no-repeat w-screen h-screen min-h-screen pt-8 sm:pt-10'>
      <Navbar />
    </div>
  )
}
