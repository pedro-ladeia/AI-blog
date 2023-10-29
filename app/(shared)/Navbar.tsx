import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
        <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-50 px-10 py-10'>
        <h1>Navbar</h1>
        </nav>
    </header>
  )
}

export default Navbar