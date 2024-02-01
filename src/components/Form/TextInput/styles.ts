import styled from 'styled-components'

export const TextInputContainer = styled.label<{ $required?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['gray-400']};
  background-color: ${({ theme }) => theme.color['gray-300']};

  input {
    border: 0;
    outline: 0;
    width: 100%;

    background-color: inherit;

    font: ${({ theme }) => theme.font['text-s']};
    color: ${({ theme }) => theme.color['gray-700']};

    &::placeholder {
      color: ${({ theme }) => theme.color['gray-600']};
    }
  }

  transition: all 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme.color['yellow-700']};

    ::placeholder {
      color: transparent;
    }
  }

  span {
    font: ${({ theme }) => theme.font['text-s']};
    font-style: italic;
    color: ${({ theme }) => theme.color['gray-600']};
  }
`
export const ErrorMessage = styled.p`
  font: ${({ theme }) => theme.font['text-xs']};
  font-weight: 400;
  color: red;
`
