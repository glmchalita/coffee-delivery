import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { coffees } from '../../../data.json'
import heroImage from '../../assets/coffe-hero.png'
import Card from '../../components/Card'
import { CoffeeSection, HeroContent, HeroSection, InfoList } from './styles'

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <HeroSection>
        <HeroContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>

            <InfoList>
              <div>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  style={{ backgroundColor: theme.color['yellow-700'] }}
                />

                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={16}
                  weight="fill"
                  style={{ backgroundColor: theme.color['gray-700'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={16}
                  weight="fill"
                  style={{ backgroundColor: theme.color['yellow-500'] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={16}
                  weight="fill"
                  style={{ backgroundColor: theme.color['purple-500'] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </InfoList>
          </div>

          <img src={heroImage} alt="" />
        </HeroContent>
      </HeroSection>

      <CoffeeSection>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeSection>
    </>
  )
}
