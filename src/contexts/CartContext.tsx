import { ReactNode, createContext, useState } from 'react'

export interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (newItem: CartItem) => void
  removeFromCart: (itemId: string) => void
  incrementQuantity: (itemId: string) => void
  decrementQuantity: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [itemAdded, setItemAdded] = useState<string[]>([])

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
