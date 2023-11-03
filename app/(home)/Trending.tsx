import React from 'react'
import TitleBox from '../(shared)/TitleBox'
import Link from 'next/link'



type TrendingCardProps = {
  className?: string
}

const TrendingCard = ({className}: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/posts/${post?.id}`}
      href='/'
    >
      <div className='z-0 relative w-full h-full bg-wh-500'>image</div>
      <div className='absolute z-1 top-0 lef-0 w-full h-full bg-gradient-gradual'></div>
      <div className='absolute z-2 bottom-0 left-0 p-3'>
        <TitleBox category='TECH' description='test'/>
      </div>
    </Link>
  )
}


type Props = {}

function Trending({}: Props) {
  return (
    <section className='pt-3 pb-8'>
      <div className='flex items-center gap-3'>
        <TitleBox 
          category='TRENDING' 
          description='THE LAST NEWS IN IA WORLD' 
          backgColor='bg-wh-900' 
          categoryColor='text-wh-10'
          textColor='text-wh-900'  
        />
      </div>

      <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-4'>
        <TrendingCard className='col-span-2 row-span-2 '/>
        <TrendingCard className='col-span-2 row-span-1 '/>
        <TrendingCard className='col-span-1 row-span-1 '/>
        <TrendingCard className='col-span-1 row-span-1 '/>
      </div>
    </section>
  )
}

export default Trending