import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_BUTTON_TAG};
  color: ${({ theme }) => theme.COLORS.GRAY_TEXT_TAG};
  border-radius: 8px;

  text-align: center;

`;