import React from 'react'
import TitleBox from '../(shared)/TitleBox'

type Props = {}

function Trending({}: Props) {
  return (
    <section className='pt-3 pb-8'>
      <div className='flex items-center gap-3'>
        <TitleBox theme='TRENDING' description='THE LAST NEWS IN IA WORLD'/>
      </div>
    </section>
  )
}

export default Trending