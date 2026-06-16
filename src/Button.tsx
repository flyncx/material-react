import { useState } from 'react'
import { Wrapper } from './Button.css'

interface MyButtonProps {
  type?: 'primary'
}

export const MdButton: React.FC<MyButtonProps> = ({ type }) => {
  const [count, setCount] = useState(0)
  return (
    <button className={Wrapper} onClick={() => setCount(count + 1)}>
      my button
      <br /> type: {type}
      <br /> count: {count}
    </button>
  )
}
