import Navbar from '@/src/app/components/Navbar'

export default function Home() {
  return (
    <div className='bg-[url("/home/background-home-mobile.jpg")] sm:bg-[url("/home/background-home-tablet.jpg")] lg:bg-[url("/home/background-home-desktop.jpg")] bg-cover lg:bg-right bg-no-repeat w-screen h-screen min-h-screen pt-0 lg:pt-10'>
      <Navbar />
    </div>
  )
}
