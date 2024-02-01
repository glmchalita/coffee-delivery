import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import { OrderInfo } from '../pages/Checkout'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/action'
import { cartReducer, CartItem, Order } from '../reducers/cart/reducer'

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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  // const [cart, setCart] = useState<CartItem[]>([])
  // const [orders, setOrders] = useState<Order[]>([])
  // const [itemAdded, setItemAdded] = useState<string[]>([])

  const { cart, orders } = cartState

  const navigate = useNavigate()

  function addToCart(newItem: CartItem) {
    dispatch(addItemAction(newItem))
    // const isItemAdded = itemAdded.find((id) => id === newItem.id)

    // if (isItemAdded) {
    //   setCart(
    //     cart.map((item) => {
    //       if (item.id === newItem.id) {
    //         return { ...item, quantity: item.quantity + newItem.quantity }
    //       } else {
    //         return item
    //       }
    //     }),
    //   )
    // } else {
    //   setCart((state) => [...state, newItem])
    //   setItemAdded((state) => [...state, newItem.id])
    // }
  }

  function removeFromCart(itemId: string) {
    dispatch(removeItemAction(itemId))
    // const newCartWithoutItemToRemove = cart.filter((item) => item.id !== itemId)

    // setCart(newCartWithoutItemToRemove)
  }

  function incrementQuantity(itemId: string) {
    dispatch(incrementItemQuantityAction(itemId))
    // setCart(
    //   cart.map((item) => {
    //     if (item.id === itemId) {
    //       return { ...item, quantity: item.quantity + 1 }
    //     } else {
    //       return item
    //     }
    //   }),
    // )
  }

  function decrementQuantity(itemId: string) {
    dispatch(decrementItemQuantityAction(itemId))
    // setCart(
    //   cart.map((item) => {
    //     if (item.id === itemId && item.quantity > 1) {
    //       return { ...item, quantity: item.quantity - 1 }
    //     } else {
    //       return item
    //     }
    //   }),
    // )
  }

  function checkoutCart(data: OrderInfo) {
    dispatch(checkoutCartAction(data, navigate))
    // const newOrder = {
    //   id: new Date().getTime(),
    //   items: cart,
    //   ...data,
    // }

    // setOrders((state) => [...state, newOrder])
    // setCart([])

    // navigate(`/order/${newOrder.id}/sucess`)
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

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
