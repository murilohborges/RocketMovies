import styled from "styled-components";
import backgroundImg from '../../assets/Cinema.png'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 100vh;
  grid-template-areas: 
  "menu image";
`;

export const Menu = styled.div`
  
  margin: auto 100px;

  grid-area: menu;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > .title{
    margin-bottom: 48px;


    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 48px;
      font-weight: 700;
      
    }
    > h3 {
      color: ${({ theme }) => theme.COLORS.GRAY_SUBTITLE};
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 48px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
    
  }

  > div:nth-child(2) {
    margin-bottom: 8px;
  }

  > div:nth-child(3) {
    margin-bottom: 8px;
  }

  > div:nth-child(4) {
    margin-bottom: 16px;
  }

  > div:nth-child(5) {
    margin-bottom: 42px;
  }
  
`;

export const NewAccountButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    

    
  }
  
  > svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  grid-area: image;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;