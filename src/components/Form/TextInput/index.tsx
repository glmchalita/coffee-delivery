import { HTMLAttributes, InputHTMLAttributes } from 'react'

import { TextInputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export default function TextInput({
  containerProps,
  required,
  ...props
}: TextInputProps) {
  const isOptional = !required

  return (
    <div {...containerProps}>
      <TextInputContainer>
        <input {...props} />

        {isOptional ? <span>Opcional</span> : null}
      </TextInputContainer>
    </div>
  )
}
