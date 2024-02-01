import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { OrderInfo } from '../pages/Checkout'

export interface CartItem {
  id: string
  quantity: number
}

interface Order extends OrderInfo {
  id: number
  items: CartItem[]
}

interface CartContextType {
  cart: CartItem[]
  orders: Order[]
  addToCart: (newItem: CartItem) => void
  removeFromCart: (itemId: string) => void
  incrementQuantity: (itemId: string) => void
  decrementQuantity: (itemId: string) => void
  checkoutCart: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [itemAdded, setItemAdded] = useState<string[]>([])
  const navigate = useNavigate()

  function addToCart(newItem: CartItem) {
    const isItemAdded = itemAdded.find((id) => id === newItem.id)

    if (isItemAdded) {
      setCart(
        cart.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + newItem.quantity }
          } else {
            return item
          }
        }),
      )
    } else {
      setCart((state) => [...state, newItem])
      setItemAdded((state) => [...state, newItem.id])
    }
  }

  function removeFromCart(itemId: string) {
    const newCartWithoutItemToRemove = cart.filter((item) => item.id !== itemId)

    setCart(newCartWithoutItemToRemove)
  }

  function incrementQuantity(itemId: string) {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      }),
    )
  }

  function decrementQuantity(itemId: string) {
    setCart(
      cart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      }),
    )
  }

  function checkoutCart(data: OrderInfo) {
    const newOrder = {
      id: new Date().getTime(),
      items: cart,
      ...data,
    }

    setOrders((state) => [...state, newOrder])
    setCart([])

    navigate(`/order/${newOrder.id}/sucess`)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        orders,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
