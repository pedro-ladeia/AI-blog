import React from 'react'
import TitleBox from './TitleBox'
import Card from './Card'

type Props = {}

const Other = (props: Props) => {
  return (
    <section>
        <hr className='border-1 mb-8' />
        <TitleBox category='PLUS' description='OTHER TRENDING POSTS' textColor='text-wh-900'/>
        <div className='sm:grid grid-cols-2 gap-16 mt-5'>
          <Card className='bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80'/>
          <Card className='bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80'/>
          <Card className='bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80'/>
          <Card className='bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80'/>
        </div>
    </section>
  )
}

export default Other