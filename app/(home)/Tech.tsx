import React from 'react'
import TitleBox from '../(shared)/TitleBox'
import Card from '../(shared)/Card'



type Props = {}

const Tech = (props: Props) => {
  return (
    <section>
      <hr className='broder-1 mb-8'/>
      <TitleBox
        category='HOT'
        description='THE MAIN NEWS IN THE IA WORLD'
        textColor='text-wh-900'
      />
      <div className=' sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5'>
        <Card className='bg-wh-500 col-span-1 row-span-3' imageHeight='h-96' isLongText/>
        <Card className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' />
        <Card className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' />
        <Card className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' />
      </div>
    </section>
  )
}

export default Tech