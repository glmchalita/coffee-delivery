import { Minus, Plus } from '@phosphor-icons/react'

import { QuantityContainer } from './styles'

export default function QuantityInput() {
  return (
    <QuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>

      <span>1</span>

      <button>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityContainer>
  )
}
