import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  grid-template-areas: 
  "header"
  "content";

  > main {
    margin: 40px 123px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: auto;
    max-height: 50vh;
    

  }

  .title {
    display: flex;
    
    align-items: center;
    margin: 50px 123px;
    

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
      width: 100%;
    }
  }
`;

export const NewNote = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  text-decoration: none;

  width: 207px;
  height: 48px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;