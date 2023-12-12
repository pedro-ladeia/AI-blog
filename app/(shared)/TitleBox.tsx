import React from 'react'

type Props = {
    category:string,
    description:string,
    backgColor?:string,
    categoryColor?:string,
    textColor?:string,
    className?:string
}

const TitleBox = ({category, description, backgColor = 'bg-accent-orange', categoryColor = 'wh-900', textColor = 'text-wh-100', className}: Props) => {
  return (
    <div className='flex items-center gap-4'>
        <h1 className={`py-2 px-6 font-bold ${backgColor} ${categoryColor} ${className}`}>{category}</h1>
        <p className={`${textColor} text-xl font-bold`}>{description}</p>
    </div>
  )
}

export default TitleBox