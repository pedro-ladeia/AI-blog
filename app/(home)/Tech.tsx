import React from 'react'
import TitleBox from '../(shared)/TitleBox'
import Card from '../(shared)/Card'


type Props = {}

const Tech = (props: Props) => {
  return (
    <section>
        <hr className='border-1' />
        <div className='flex items-center gap-3 my-8'>
            <TitleBox
                category='HOT'
                description='THE MAIN NEWS OF IA WORLD'
                textColor='text-wh-900'
            />
        </div>
        <div className='sm:grid grid-cols-2 grid-rows-3 gap-8 my-5 h-96'>
            <Card
              className='bg-wh-500 col-span-1 row-span-3'
              imageHeight='h-96'
              isLongForm

            />
            {/* SMALL CARDS */}
            <Card
              className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
              imageHeight='h-48'
              isSmall

            />

            <Card
              className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
              imageHeight='h-48'
              isSmall

            />

            <Card
              className='bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
              imageHeight='h-48'
              isSmall

            />
        </div>
    </section>
  )
}

export default Tech