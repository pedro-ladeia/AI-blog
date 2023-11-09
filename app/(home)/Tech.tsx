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
            <div className='col-span-1 row-span-3 bg-wh-300'></div>
            <div className='col-span-1 row-span-1 bg-wh-300'></div>
            <div className='col-span-1 row-span-1 bg-wh-300'></div>
            <div className='col-span-1 row-span-1 bg-wh-300'></div>
        </div>
    </section>
  )
}

export default Tech