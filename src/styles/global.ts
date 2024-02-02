import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus-visible {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color['purple-500']};
    border-radius: 6px;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${({ theme }) => theme.color['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    border: 0;
    line-height: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
