import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  
`;

export const Content = styled.div`
  grid-area: content;
  margin: 40px 123px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  
  > a {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;
  }

  .wrapper-button {
    width: 98%;

    margin-bottom: 93px;

    display: flex;
    align-items: center;
    gap: 40px;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 100%;
      height: 56px;

      border-radius: 8px;
      border: 0;
      font-size: 16px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_WRAPPER_TAGS};
      color: ${({ theme }) => theme.COLORS.PINK};
      cursor: pointer;

      &:hover{
        filter: brightness(0.7);
      }
    }

  }

  

`;

export const Form = styled.div`

  width: 98%;
  margin-bottom: 40px;

  > h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  > .wrapper-input {
    display: flex;
    align-items: center;
    gap: 40px;

    margin-bottom: 40px;
  }

`;

export const Section = styled.div`
  width: 98%;
  margin-bottom: 40px;
  

  > h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_PARAGRAPH};
    margin-bottom: 24px;
  }

  > .wrapper-tags {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_WRAPPER_TAGS};
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    flex-wrap: wrap;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 24px;

  }
`;