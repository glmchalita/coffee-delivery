import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  a:first-child {
    img {
      display: block;
    }
  }
`

export const HeaderAside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.color['purple-700']};
    background-color: ${({ theme }) => theme.color['purple-300']};

    svg {
      color: ${({ theme }) => theme.color['purple-500']};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;

    color: ${({ theme }) => theme.color['yellow-700']};
    background-color: ${({ theme }) => theme.color['yellow-300']};
    cursor: pointer;

    position: relative;

    span {
      font: ${({ theme }) => theme.font['text-s']};
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color['yellow-700']};

      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
