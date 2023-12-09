import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap');
/* 
font-family: 'Kanit', sans-serif;
font-family: 'Prompt', sans-serif; 
*/
  body{
    padding: 0;
    margin: 0;
    font-family: 'Prompt', sans-serif; 
  }
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
