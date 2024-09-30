import Navbar from '@/src/app/components/Navbar'

export default function Home() {
  return (
    <div className='bg-[url("/home/background-home-mobile.jpg")] sm:bg-[url("/home/background-home-tablet.jpg")] lg:bg-[url("/home/background-home-desktop.jpg")] bg-cover lg:bg-right bg-no-repeat w-screen h-screen min-h-screen '>
      <div className='flex flex-col justify-between items-center pt-0 lg:pt-10 w-screen h-screen'>
        <Navbar />

        <div className='container lg:px-16 pb-10 lg:pb-32 flex flex-col items-center lg:flex-row gap-10 lg:gap-0 justify-between w-full'>
          <div className='w-[80%] xl:w-1/2'>
            <p className='typography-preset-five uppercase text-center lg:text-left'>
              So, you want to travel to
            </p>
            <p className='typography-preset-one text-center lg:text-left'>SPACE</p>
            <p className='typography-preset-nine -mt-6 text-center lg:text-left'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </p>
          </div>

          <div className='flex items-center justify-center xl:justify-end xl:pr-10 w-1/2'>
            <div className='uppercase text-primary rounded-full bg-white typography-preset-four w-[272px] h-[272px] flex items-center justify-center'>
              <p>Explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
