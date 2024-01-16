import styled from 'styled-components'

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  padding: 1rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.color['gray-400']};

  font: ${({ theme }) => theme.font['button-m']};
  color: ${({ theme }) => theme.color['gray-700']};
  text-transform: uppercase;

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.color['purple-500']};
  }

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color['gray-500']};
    color: ${({ theme }) => theme.color['gray-800']};
  }
`
