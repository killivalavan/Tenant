import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}
body{
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden ;
}


html{ 
    font-size: 62.5%;
}

a{
    text-decoration: none;
    color: black;
}

.line{
   border-bottom: 5px solid #00bca9;
   width: 5%;
   margin: auto;
}

input,select, textarea {
  &:focus{
    outline:none;
    border: 2px solid #19B5FE;
    box-shadow: 0 0 10px 1px rgba(4,203,161, 0.5);
  }
}

 /* To hide arrows */
 input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
  }

    
/* Media Qurey */
@media screen and (max-width: 680px){
    html{
        font-size: 45%;
    }

    .line{
        border-bottom: 5px solid #00cba9;
        width: 15%;
        margin: auto;
      }
  
}









/* Scroll bar */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

// Scroll Bar
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #E8E8E8;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

`;


export default GlobalStyle;