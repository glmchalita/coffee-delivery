import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { RadioContainer } from './styles'

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...props }: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" ref={ref} {...props} />
      {children}
    </RadioContainer>
  )
})
