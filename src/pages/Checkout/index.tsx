import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import * as zod from 'zod'

import { coffees } from '../../../data.json'
import QuantityInput from '../../components/Form/QuantityInput'
import Radio from '../../components/Form/Radio'
import { TextInput } from '../../components/Form/TextInput'
import { useCart } from '../../hooks/usecart'
import {
  CheckoutContainer,
  DeliveryCard,
  DetailsContainer,
  InfoCoffee,
  InfoControls,
  OrderButton,
  OrderCard,
  OrderContainer,
  PaymentCard,
  PaymentOptions,
  SelectedCoffee,
  TotalCart,
} from './styles'

const newOrderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export default function Checkout() {
  const theme = useTheme()
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItensPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const shippingPrice = 3.5

  function handleRemoveFromCart(id: string) {
    removeFromCart(id)
  }

  function handleIncrementQuantity(id: string) {
    incrementQuantity(id)
  }

  function handleDecrementQuantity(id: string) {
    decrementQuantity(id)
  }

  function handleCreateNewOrder(data) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <DetailsContainer>
        <h2>Complete seu pedido</h2>

        <DeliveryCard>
          <div>
            <MapPinLine size={22} color={theme.color['yellow-700']} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
            <TextInput
              placeholder="CEP"
              required
              containerProps={{ style: { gridArea: 'cep' } }}
              {...register('cep')}
            />

            <TextInput
              placeholder="Rua"
              required
              containerProps={{ style: { gridArea: 'street' } }}
              {...register('street')}
            />

            <TextInput
              placeholder="Número"
              required
              containerProps={{ style: { gridArea: 'number' } }}
              {...register('number', { valueAsNumber: true })}
            />

            <TextInput
              placeholder="Complemento"
              containerProps={{ style: { gridArea: 'fullAddress' } }}
              {...register('fullAddress')}
            />

            <TextInput
              placeholder="Bairro"
              required
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              {...register('neighborhood')}
            />

            <TextInput
              placeholder="Cidade"
              required
              containerProps={{ style: { gridArea: 'city' } }}
              {...register('city')}
            />

            <TextInput
              placeholder="UF"
              required
              maxLength={2}
              containerProps={{ style: { gridArea: 'state' } }}
              {...register('uf')}
            />
          </form>
        </DeliveryCard>

        <PaymentCard>
          <div>
            <CurrencyDollar size={22} color={theme.color['purple-500']} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <PaymentOptions>
            <Radio>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </Radio>

            <Radio>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </Radio>

            <Radio>
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </PaymentOptions>
        </PaymentCard>
      </DetailsContainer>

      <OrderContainer>
        <h2>Cafés selecionados</h2>

        <OrderCard>
          {coffees.map((coffee) => {
            const itemIndex = cart.findIndex((item) => item.id === coffee.id)

            if (itemIndex >= 0) {
              return (
                <SelectedCoffee key={coffee.id}>
                  <div>
                    <img src={coffee.image} alt="" />

                    <InfoCoffee>
                      <h4>{coffee.title}</h4>

                      <InfoControls>
                        <QuantityInput
                          quantity={cart[itemIndex].quantity}
                          incrementQuantity={() =>
                            handleIncrementQuantity(coffee.id)
                          }
                          decrementQuantity={() =>
                            handleDecrementQuantity(coffee.id)
                          }
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveFromCart(coffee.id)}
                        >
                          <Trash size={16} />
                          Remover
                        </button>
                      </InfoControls>
                    </InfoCoffee>
                  </div>

                  <span>R$ {coffee.price.toFixed(2)}</span>
                </SelectedCoffee>
              )
            } else {
              return null
            }
          })}

          <hr />

          <TotalCart>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItensPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItensPrice + shippingPrice)}
              </span>
            </div>
          </TotalCart>

          <OrderButton type="submit" form="order">
            <NavLink to="/sucess">Confirmar pedido</NavLink>
          </OrderButton>
        </OrderCard>
      </OrderContainer>
    </CheckoutContainer>
  )
}
