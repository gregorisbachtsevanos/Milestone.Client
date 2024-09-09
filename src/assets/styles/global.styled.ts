import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  overflow: hidden;
  width: 100%; 
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  color: ${({ theme }) => theme.palette.white};
  scrollbar-color: transparent white;
}
a {
  color: inherit;
  text-decoration: none;
}

button{
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-family: 'Space Grotesk', sans-serif;
  color: orange;
  background-color: transparent;
  cursor: pointer;
}

.transition-effect{
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

@media (min-width: 500px) {
      /* Chrome, Edge, and Safari */
      *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
  }

  *::-webkit-scrollbar-track {
      background: #ffffff;
      border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
      background-color:red;
      border-radius: 5px;
      border: 0px none #ffffff;
  }
}


`;
