import styled from "styled-components";
import starFilled from "../../assets/starFilled.svg";
import starEmpty from "../../assets/starEmpty.svg";

export const Container = styled.div`
  
  width: 99%;


  
  height: auto;
  padding: 32px;
  text-align: left;

  background-color: ${({ theme }) => theme.COLORS.PINK_DARK};
  border-radius: 16px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
    
  }

  > .rating {
    margin: 15px auto 15px;
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_PARAGRAPH};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
  

`;

export const StarFilled = styled.div`
  height: 12px;
  width: 12px;
  background: url(${starFilled}) center center;
  background-size: cover;
`;

export const StarEmpty = styled.div`
  height: 12px;
  width: 12px;
  background: url(${starEmpty}) center center;
  background-size: cover;
`;