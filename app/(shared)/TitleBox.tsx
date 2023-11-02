import React from 'react'

type Props = {
    theme:string,
    description:string,
}

const TitleBox = ({theme, description}: Props) => {
  return (
    <div className='flex items-center gap-4'>
        <h1 className='p-2 font-bold bg-wh-900 text-wh-10'>{theme}</h1>
        <p>{description}</p>
    </div>
  )
}

export default TitleBox