import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};

  padding: 0 123px;

  display: flex;
  align-items: center;
  gap: 64px;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }

  > .input-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};

    border-radius: 10px;

    > input {
      height: 56px;
      width: 100%;

      padding: 19px auto;
      margin-left: 24px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;
      border: 0;
      font-size: 16px;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
        font-size: 14px;
      }
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 68px;
  text-decoration: none;
  

  strong {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }

  div {
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;