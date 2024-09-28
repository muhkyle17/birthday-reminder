'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
      <RxHamburgerMenu className='w-9 h-9' />
    </div>
  )
}

export default NavMobile
