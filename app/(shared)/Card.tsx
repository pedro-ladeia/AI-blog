import Link from 'next/link'
import React from 'react'
import { PostInterface } from '../(useQuery)/PostInterface'

type Props = {
  className?: string,
  imageHeight: string,
  isSmall?: boolean,
  isLongText?: boolean,
  post:PostInterface
}

const Card = ({className, imageHeight, isSmall = false, isLongText = false, post}:Props) => {
  return(
    <div className={className}>
      <Link className='basis-full hover:opacity-70' href= '/'>
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className='basis-full'>
        <Link className='basis-full hover:opacity-70' href= '/'>
          <h5 className ={`font-bold hover:text-accent-green
            ${isSmall? 'text-base' : 'text-lg'}
            ${isSmall? 'line-clamp-2' : ''}
          `}>Title</h5>
        </Link>
        <div className={`${isSmall? 'my-2' : 'flex my-3'}`}>
          <h5 className='font-semibold text-xs'>{post?.author ?? "Author"}</h5>
          <h6 className='text-wh-300 text-xs'>{post?.updatedAt ??"Date"}</h6>
        </div>
        <p className={`text-wh-300 ${isLongText? 'line-clamp-5' : 'line-clamp-3'}`}>
          {post?.snippet ?? "Snippet"}
        </p>
      </div>
    </div>
  )
}
export default Card