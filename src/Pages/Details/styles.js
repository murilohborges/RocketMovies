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

  > .wrapper-button {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    
    > button {
      display: flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;

      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      font-weight: 400;
    }
  }
  
  
`;

export const Title = styled.div`

  display: flex;
  align-items: center;
  gap: 19px;
  
  margin-bottom: 24px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .rating {
    margin: 15px auto 15px;
    display: flex;
    flex-direction: row;
    gap: 6px;

    > svg {
      height: 20px;
      width: 20px;
      background-size: cover;
    }
  }
`;

export const Historic = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 40px;

  > .author{
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

  }

  > .date {
    display: flex;
    align-items: center;
    gap: 8px;

    > svg{
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT_NOTE};
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  margin-bottom: 40px;

  > .tags {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > article {
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT_NOTE};
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    width: 98%;
  }
  
`;
