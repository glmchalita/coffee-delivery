import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem auto;
  gap: 2rem;

  padding-top: 2.5rem;
  padding-bottom: 15rem;

  h2 {
    margin-bottom: 1rem;

    font: ${({ theme }) => theme.font['title-xs']};
    color: ${({ theme }) => theme.color['gray-800']};
  }
`

export const DetailsContainer = styled.div``

const BaseCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color['gray-200']};

  > div:first-of-type {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    div {
      h3 {
        margin-bottom: 0.125rem;

        font: ${({ theme }) => theme.font['text-m']};
        color: ${({ theme }) => theme.color['gray-800']};
      }

      span {
        font: ${({ theme }) => theme.font['text-s']};
        color: ${({ theme }) => theme.color['gray-700']};
      }
    }
  }
`

export const DeliveryCard = styled(BaseCard)`
  margin-bottom: 0.75rem;

  form fieldset {
    border: 0;
    display: grid;
    grid-template-areas:
      'cep . .'
      'street street street'
      'number fullAddress fullAddress'
      'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;

    &:disabled label {
      background-color: ${({ theme }) => theme.color['gray-500']};
      cursor: not-allowed;

      input {
        cursor: not-allowed;
      }
    }
  }
`

export const PaymentCard = styled(BaseCard)``

export const PaymentOptions = styled.div`
  fieldset {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;

    &:disabled label {
      background-color: ${({ theme }) => theme.color['gray-500']};
      cursor: not-allowed;
    }
  }
`
export const OrderContainer = styled.div``

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${({ theme }) => theme.color['gray-200']};

  hr {
    border: 1px solid ${({ theme }) => theme.color['gray-400']};
  }
`

export const SelectedCoffee = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
      display: block;
    }
  }

  span {
    font: ${({ theme }) => theme.font['text-m-bold']};
    color: ${({ theme }) => theme.color['gray-700']};
  }
`

export const InfoCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font: ${({ theme }) => theme.font['text-m']};
    color: ${({ theme }) => theme.color['gray-800']};
  }
`

export const InfoControls = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.color['gray-400']};
    color: ${({ theme }) => theme.color['gray-700']};
    font: ${({ theme }) => theme.font['button-m']};
    text-transform: uppercase;

    padding: 0.5rem;

    svg {
      color: ${({ theme }) => theme.color['purple-500']};
    }

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.color['gray-800']};
      background-color: ${({ theme }) => theme.color['gray-500']};
    }
  }
`

export const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.color['gray-700']};
    font: ${({ theme }) => theme.font['text-s']};

    span:last-child {
      font: ${({ theme }) => theme.font['text-m']};
    }
  }

  div:last-child {
    span {
      color: ${({ theme }) => theme.color['gray-800']};
      font: ${({ theme }) => theme.font['text-l-bold']};
    }
  }
`

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 0.75rem 0;
  background-color: ${({ theme }) => theme.color['yellow-500']};
  color: ${({ theme }) => theme.color.white};
  font: ${({ theme }) => theme.font['button-l']};

  text-transform: uppercase;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color['yellow-700']};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color['yellow-700']};
  }
`

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.color['yellow-500']};
  }

  span {
    color: ${({ theme }) => theme.color['gray-600']};
    font: ${({ theme }) => theme.font['text-l']};
  }

  button {
    width: 100%;
  }
`
