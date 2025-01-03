import React from 'react'
interface ButtonI {
    content: string;
    className?: string;
    onClick?: () => void | string;

}
const Button = ({content, className, onClick}: ButtonI) => {
  return (
    <button className={className} onClick={onClick}>{content}</button>
  )
}

export default Button