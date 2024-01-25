import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.PINK_DARK};
    position: relative;

    > button {
    display: flex;
    align-items: center;
    gap: 8px;
    
    position: absolute;
    left: 168px;
    top: 64px;
    border: none;
    background: none;
    cursor: pointer;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;
    }
  }
`;

export const Form = styled.div`
  max-width: 340px;
  margin: 5px auto 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > div:nth-child(2), div:nth-child(4) {
    margin-bottom: 24px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
    width: 20px;
    height: 18px;

    margin-left: 12px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -102px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 4px;
    right: 10px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_BUTTON_TAG};
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;