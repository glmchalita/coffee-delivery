import styled from 'styled-components'

export const SucessContainer = styled.div`
  padding-top: 5rem;

  h1 {
    margin-bottom: 0.25rem;

    font: ${({ theme }) => theme.font['title-l']};
    color: ${({ theme }) => theme.color['yellow-700']};
  }

  > p {
    font: ${({ theme }) => theme.font['text-l']};
    color: ${({ theme }) => theme.color['gray-800']};
  }

  > div {
    padding-top: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem 8.25rem 2.5rem 2.5rem;

  background:
    linear-gradient(
        ${({ theme }) => theme.color['gray-100']},
        ${({ theme }) => theme.color['gray-100']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme.color['yellow-500']},
        ${({ theme }) => theme.color['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      border-radius: 999px;
      padding: 0.5rem;
      box-sizing: initial;

      color: ${({ theme }) => theme.color['gray-100']};
    }

    > div {
      font: ${({ theme }) => theme.font['text-m']};
      color: ${({ theme }) => theme.color['gray-700']};

      span {
        font: ${({ theme }) => theme.font['text-m-bold']};
      }
    }

    &:not(:first-child) p:last-child {
      font: ${({ theme }) => theme.font['text-m-bold']};
    }
  }
`
