import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import motoboy from '../../assets/motoboy.png'
import { DeliveryInfo, SucessContainer } from './styles'

export default function Sucess() {
  const theme = useTheme()

  return (
    <SucessContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <DeliveryInfo>
          <div>
            <MapPin
              size={16}
              weight="fill"
              style={{ backgroundColor: theme.color['purple-500'] }}
            />

            <div>
              <p>
                Entrega em <span>Rua João Vieira Prioste, 176</span>
              </p>
              <p>Vila Carrão - São Paulo, SP</p>
            </div>
          </div>

          <div>
            <Timer
              size={16}
              weight="fill"
              style={{ backgroundColor: theme.color['yellow-500'] }}
            />

            <div>
              <p>Previsão de Entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div>
            <CurrencyDollar
              size={16}
              style={{ backgroundColor: theme.color['yellow-700'] }}
            />

            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </DeliveryInfo>

        <img
          src={motoboy}
          alt="Ilustração de um motoboy em cima de sua moto, a caminho do destino de entrega"
        />
      </div>
    </SucessContainer>
  )
}
