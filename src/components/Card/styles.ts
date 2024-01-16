import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.color['gray-200']};
`
export const CardImg = styled.img`
  align-self: center;
  margin-top: -1.25rem; //LEMBRETE
  margin-bottom: 0.75rem;
`

export const CardTags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  text-transform: uppercase;
  font: ${({ theme }) => theme.font.tag};
  color: ${({ theme }) => theme.color['yellow-700']};

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color['yellow-300']};
  }
`

export const CardTitle = styled.h3`
  font: ${({ theme }) => theme.font['title-s']};
  color: ${({ theme }) => theme.color['gray-800']};
  margin-bottom: 0.5rem;
`

export const CardDescription = styled.span`
  margin-bottom: 2rem;
  font: ${({ theme }) => theme.font['text-s']};
  color: ${({ theme }) => theme.color['gray-600']};
`

export const CardControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const CardPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  color: ${({ theme }) => theme.color['gray-700']};

  span:first-child {
    font: ${({ theme }) => theme.font['text-s']};
  }

  span:last-child {
    font: ${({ theme }) => theme.font['title-m']};
  }
`

export const CardOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    padding: 0.5rem;
    border-radius: 0.375rem;

    background-color: ${({ theme }) => theme.color['purple-700']};

    svg {
      color: ${({ theme }) => theme.color['gray-200']};
    }

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.color['purple-500']};
    }
  }
`
