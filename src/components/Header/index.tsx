import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import coffeDeliveryLogo from '../../assets/coffe-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'
import { HeaderAside, HeaderContainer } from './styles'

export default function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={coffeDeliveryLogo} alt="" />
      </NavLink>

      <HeaderAside>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </NavLink>
      </HeaderAside>
    </HeaderContainer>
  )
}
