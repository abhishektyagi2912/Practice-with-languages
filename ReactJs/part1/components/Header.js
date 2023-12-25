import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <div className='bg-gray-200 p-2'>
            <Link href='/' className='text-blue-500 px-10'>
            Home
            </Link>
            <Link href='/About' className='text-blue-500 px-10'>
             About
            </Link>
            <Link href='/Project' className='text-blue-500 px-10'>
            Project
            </Link>
        </div>
    </>
  )
}

export default Header