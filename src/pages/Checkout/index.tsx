import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import QuantityInput from '../../components/Form/QuantityInput'
import Radio from '../../components/Form/Radio'
import TextInput from '../../components/Form/TextInput'
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

export default function Checkout() {
  const theme = useTheme()

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

          <form action="">
            <TextInput
              placeholder="CEP"
              required
              containerProps={{ style: { gridArea: 'cep' } }}
            />

            <TextInput
              placeholder="Rua"
              required
              containerProps={{ style: { gridArea: 'street' } }}
            />

            <TextInput
              placeholder="Número"
              required
              containerProps={{ style: { gridArea: 'number' } }}
            />

            <TextInput
              placeholder="Complemento"
              containerProps={{ style: { gridArea: 'fullAddress' } }}
            />

            <TextInput
              placeholder="Bairro"
              required
              containerProps={{ style: { gridArea: 'neighborhood' } }}
            />

            <TextInput
              placeholder="Cidade"
              required
              containerProps={{ style: { gridArea: 'city' } }}
            />

            <TextInput
              placeholder="UF"
              required
              maxLength={2}
              containerProps={{ style: { gridArea: 'state' } }}
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
          <SelectedCoffee>
            <div>
              <img src="./src/assets/coffees/americano.png" alt="" />

              <InfoCoffee>
                <h4>Expresso Tradicional</h4>

                <InfoControls>
                  <QuantityInput />
                  <button type="button">
                    <Trash size={16} />
                    Remover
                  </button>
                </InfoControls>
              </InfoCoffee>
            </div>

            <span>R$ 9,90</span>
          </SelectedCoffee>

          <hr />

          <TotalCart>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </TotalCart>

          <OrderButton type="button">Confirmar pedido</OrderButton>
        </OrderCard>
      </OrderContainer>
    </CheckoutContainer>
  )
}
