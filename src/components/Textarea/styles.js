import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
    font-size: 16px;
    padding: 19px 16px;
    
  }
`;
