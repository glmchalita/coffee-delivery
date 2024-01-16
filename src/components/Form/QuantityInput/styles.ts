import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.color['gray-400']};

  button {
    display: flex;
    align-items: center;

    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.color['purple-500']};

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.color['purple-700']};
      }
    }
  }

  span {
    font: ${({ theme }) => theme.font['text-m']};
    color: ${({ theme }) => theme.color['gray-900']};
  }
`
