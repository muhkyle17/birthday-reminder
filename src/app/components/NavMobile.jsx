'use client'

import { useState } from 'react'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: '160',
        damping: '60',
      },
    },
  }

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }

  const navigation = [
    {
      href: '/',
      name: '00 Home',
    },
    {
      href: '/',
      name: '01 Destination',
    },
    {
      href: '/',
      name: '02 Crew',
    },
    {
      href: '/',
      name: '03 Technology',
    },
  ]

  return (
    <nav className='relative'>
      <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
        <RxHamburgerMenu className='w-8 h-8' />
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className='fixed top-0 right-0 h-full w-3/4 bg-primary// backdrop-blur-3xl  z-40'>
        <motion.ul
          variants={ulVariants}
          initial='hidden'
          style={{ originX: 0.5 }}
          animate={isOpen ? 'visible' : ''}
          className={`${
            isOpen ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-full flex flex-col justify-start items-center transition-all duration-500 overflow-hidden`}>
          <div onClick={() => setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
            <RxCross2 className='w-8 h-8' />
          </div>

          {navigation.map((item, index) => {
            return (
              <li key={index} className='mb-8'>
                <button
                  onClick={() => router.push(`${item.href}`)}
                  className='text-xl cursor-pointer capitalize '>
                  {item.name}
                </button>
              </li>
            )
          })}
        </motion.ul>
      </motion.div>
    </nav>
  )
}

export default NavMobile
