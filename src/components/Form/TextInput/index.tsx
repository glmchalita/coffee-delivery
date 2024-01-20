import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'

import { TextInputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = forwardRef(function TextInput(
  { containerProps, required, onFocus, onBlur, ...props }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const isOptional = !required

  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <div {...containerProps}>
      <TextInputContainer data-state={isFocused ? 'focused' : 'blurred'}>
        <input onFocus={handleFocus} onBlur={handleBlur} {...props} ref={ref} />

        {isOptional ? <span>Opcional</span> : null}
      </TextInputContainer>
    </div>
  )
})
