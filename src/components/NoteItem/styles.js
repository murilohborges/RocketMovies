import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: min-content;

  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_PLACEHOLDER}` : "none"};
  border-radius: 10px;

  width: fit-content;
  
  padding: 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
    
    > svg {
      width: 22px;
      height: 24px;
    }
  }

  > input {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    font-size: 16px;
    border: 0;
    width: fit-content;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
    }

  }

`;