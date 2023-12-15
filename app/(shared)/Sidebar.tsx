import React from 'react'
import TitleBox from './TitleBox'
import SocialMedia from './SocialMedia'
import Subscribe from './Subscribe'

type Props = {}

function Sidebar({}: Props) {
  return (
    <section className=''>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
          SUBSCRIBE AND FOLLOW
        </h4>
        
        <div className='my-5 mx-5'>
            <SocialMedia isDark />
        </div>
        <Subscribe />
        <div className='bg-wh-900 '>advert image</div>
        <h2 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
          ABOUT THE BLOG
        </h2>
        <div className='bg-wh-900 '>profile image</div>
        <h2 className='py-3 px-5 text-wh-500 font-bold text-center'>
          Alan Turing
        </h2>
          <p className='text-wh-500 text-center text-sm'>
          Alan Turing was an English mathematician, father of computing science, logician, cryptanalyst.
        </p>
    </section>
  )
}

export default Sidebar