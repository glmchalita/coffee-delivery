import { useState } from 'react'

import { ShoppingCart } from '@phosphor-icons/react'

import { CartItem } from '../../contexts/CartContext'
import { useCart } from '../../hooks/usecart'
import QuantityInput from '../Form/QuantityInput'
import {
  CardContainer,
  CardControl,
  CardDescription,
  CardImg,
  CardOrder,
  CardPrice,
  CardTags,
  CardTitle,
} from './styles'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export default function Card({ coffee }: CardProps) {
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    const newItem: CartItem = {
      id: coffee.id,
      quantity,
    }

    addToCart(newItem)
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CardContainer>
      <CardImg src={coffee.image} alt={coffee.title} />

      <CardTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>

      <CardTitle>{coffee.title}</CardTitle>

      <CardDescription>{coffee.description}</CardDescription>

      <CardControl>
        <CardPrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CardPrice>

        <CardOrder>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button type="button" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardOrder>
      </CardControl>
    </CardContainer>
  )
}
