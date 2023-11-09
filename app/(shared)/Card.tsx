import React from 'react'

type Props = {
    className?: string;
    imageHeight?: number;
    isSmall?: boolean;
    isLongForm?: boolean;

}

const Card = ({className, imageHeight, isSmall = false, isLongForm = false}: Props) => {
  return (
    <div>Card</div>
  )
}

export default Card