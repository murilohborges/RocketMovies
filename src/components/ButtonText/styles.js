import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 56px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  cursor: pointer;

  &:hover{
    filter: brightness(0.7);
  }
`;