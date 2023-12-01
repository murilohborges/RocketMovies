import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};

  border-radius: 10px;
  padding-left: 14px;

  > input {
    height: 56px;
    width: 100%;

    padding: 19px auto;
    margin-left: 14px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      font-size: 16px;
    }
  }
  
`;