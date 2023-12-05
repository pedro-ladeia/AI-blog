import React from 'react'
import TitleBox from '../(shared)/TitleBox'
import Card from '../(shared)/Card'

type Props = {}

function Travel({}: Props) {
  return (
    <section>
        <hr className='border-1 mb-8' />
        <TitleBox category='NEWS' description='NEW TRAVEL EXPERIENCE' backgColor='bg-accent-green' textColor='text-wh-900'/>
        <div className='sm:flex justify-between gap-8'>
          <Card className='basis-1/3 bg-wh-500 mt-5' imageHeight='h-80' isLongText/>
          <Card className='basis-1/3 bg-wh-500 mt-5' imageHeight='h-80' isLongText/>
          <Card className='basis-1/3 bg-wh-500 mt-5' imageHeight='h-80' isLongText/>
        </div>
        <Card className='bg-wh-500 sm:flex justify-between items-center gap-3 mt-7 mb-5' imageHeight='h-80' isLongText/>
    </section>
  )
}

export default Travel