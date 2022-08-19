import styled from 'styled-components';

export const Container = styled.div`
 
 >div{
   
   
   display: grid;
   grid-template-columns:3fr 1fr;
   grid-template-rows:10vh 80vh 10vh;
    grid-template-areas: "h h"
                        "m a"
                         "f f";
    
                         @media (max-width: 768px) {
                           grid-template-areas: "h h"
                        "m m"
                        "a a"
                         "f f";
                        }
  }
  
`;
export const Header = styled.div`
  
   background-color: yellow;
   //grid-column:1/3;
   grid-area: h;
`;
export const Main = styled.div`
  
   background-color: green;
   grid-area: m;
`;
export const Aside = styled.div`
   grid-area: a;
    background-color: blue;
`;
export const Footer = styled.div`
   grid-area: f;
    background-color: red;
   // grid-column:1/3;
`;

