import { ShoppingCart } from '@phosphor-icons/react'

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
          <QuantityInput />

          <button type="button">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardOrder>
      </CardControl>
    </CardContainer>
  )
}
