import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: auto;
  height: 116px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};

  padding: 0 123px;

  display: flex;
  align-items: center;
  gap: 40px;
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

  > button {
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  width: 300px;
  height: 68px;
  text-decoration: none;
  
  > .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

  }

  
`;