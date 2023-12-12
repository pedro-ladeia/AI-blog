import React from 'react'
import TitleBox from './TitleBox'
import SocialMedia from './SocialMedia'
import Subscribe from './Subscribe'

type Props = {}

function Sidebar({}: Props) {
  return (
    <section className=''>
        <TitleBox
            category='Subscribe and Follow' 
            description='' 
            backgColor='bg-wh-900' 
            categoryColor='text-wh-10'
            className='w-full text-center'
            />
        
        <div className='my-5 mx-5'>
            <SocialMedia isDark />
        </div>
        <Subscribe />
    </section>
  )
}

export default Sidebar