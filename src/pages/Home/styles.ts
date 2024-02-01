import styled from 'styled-components'

export const HeroSection = styled.section``

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;

  h1 {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['gray-900']};
  }

  p {
    font: ${({ theme }) => theme.font['text-l']};
    color: ${({ theme }) => theme.color['gray-800']};
    margin: 1rem 0 4.125rem 0;
  }
`

export const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  font: ${({ theme }) => theme.font['text-m']};
  color: ${({ theme }) => theme.color['gray-700']};

  div {
    display: flex;
    align-items: center;

    svg {
      padding: 0.5rem;
      margin-right: 0.75rem;

      box-sizing: initial;
      border-radius: 999px;

      color: ${({ theme }) => theme.color['gray-100']};
    }
  }
`

export const CoffeeSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    font: ${({ theme }) => theme.font['title-l']};
    color: ${({ theme }) => theme.color['gray-800']};
  }
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
