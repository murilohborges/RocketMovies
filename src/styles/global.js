import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    outline: none;
    -webkit-font-smoothing: antialiased;
    
    ::-webkit-scrollbar {
      width: 10px;
      
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};;
      border-radius: 8px;
      border: 0px solid #ffffff;
      
    }
  }
  

`;