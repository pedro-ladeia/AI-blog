import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
        <nav className='flex justify-between items-center w-full text-wh-50 px-10 py-4 bg-wh-900'>
          <div className='hidden sm:block'> Social media </div> {/* Only appear in screens above small */}
            
            <div className='flex justify-between items-center gap-4 sm:gap-10'>
              <Link href="/"> Home </Link>
              <Link href="/"> About us </Link>
              <Link href="/"> Trending </Link>
            </div>
            
            <div className='flex justify-between gap-4 sm:gap-10'>
              <Link href="/"> Sign in </Link>
              <Link href="/"> Sign up </Link>
            </div>
        </nav>

        {/* Navbar ends here */}
            
            <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
              <div className='basis-2/3 md:mt-3'>
                <h1 className='font-bold text-3xl md:text-5xl'>BLOG OF THE FUTURE</h1>
                <h4 className=' mt-3'>Read the blog that uses AI</h4>
              </div>

              <div className='basis-full relative w-auto h-32 bg-wh-500'>
                Image here
              </div>
            </div>
            <hr className='border-1 mx-10'/>
    </header>
  )
}

export default Navbar