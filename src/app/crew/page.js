import Navbar from '@/components/Navbar'

const Crew = () => {
  return (
    <div className='bg-[url("/crew/background-crew-mobile.jpg")] sm:bg-[url("/crew/background-crew-tablet.jpg")] lg:bg-[url("/crew/background-crew-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto pb-20 lg:px-20 xl:px-40 mt-10 lg:mt-14 flex flex-col items-center gap-10 lg:gap-24'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 lg:self-start'>
            <span className='font-bold text-[#ffffff5f]'>02</span>
            Meet your crew
          </p>

          {/* <HoverMiniTab /> */}
        </div>
      </div>
    </div>
  )
}

export default Crew
