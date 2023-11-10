import Link from 'next/link';
import React from 'react'

type Props = {
    className?: string;
    imageHeight?: number;
    isSmall?: boolean;
    isLongForm?: boolean;

}

const Card = ({className, imageHeight, isSmall = false, isLongForm = false}: Props) => {
  return (
    <div className={className}>
      <Link 
        className='basis-full hover:opacity-70'
        href='/'
        >
          <div className={`relative w-auto ${imageHeight}`}>
            image
          </div>
      </Link>

      <div className='basis-full'>
        <Link href='/'>
            <h4 className={
              `font-bold hover:text-accent-green ${isSmall? 'text-base' : 'text-lg'} 
              ${isSmall? 'line-clamp-2' : ''}`}
              >
              Title
            </h4>
        </Link>

        <div className={`${isSmall? 'my-5' : 'flex my-3'} gap-3`}>
          <h5 className='font-semibold text-xs '>author</h5>
          <h6 className='text-wh-300 text-xs'>date</h6>
        </div>

        <p className={`text-wh-500 ${isLongForm? 'line-clamp-5' : 'line-clamp-3'}`}>Long text</p>
      </div>

    </div>
  )
}

export default Card