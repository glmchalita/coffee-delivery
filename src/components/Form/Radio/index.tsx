import { InputHTMLAttributes } from 'react'

import { RadioContainer } from './styles'

type RadioProps = InputHTMLAttributes<HTMLInputElement>

export default function Radio({ children, ...props }: RadioProps) {
  return (
    <RadioContainer>
      <input type="radio" {...props} />
      {children}
    </RadioContainer>
  )
}
