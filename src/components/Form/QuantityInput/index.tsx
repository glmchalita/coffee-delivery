import { Minus, Plus } from '@phosphor-icons/react'

import { QuantityContainer } from './styles'

interface QuantityProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export default function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityProps) {
  return (
    <QuantityContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{quantity}</span>

      <button onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityContainer>
  )
}
