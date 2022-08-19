import styled from 'styled-components';
import{ FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  center;
  margin: 25px 32px;
  background-color: var(--primary);
  >svg{
    
    
  }
`;
export const Line = styled.div`
border-top: 1px solid var(--border);
max-width:1280px;
width: 100%;

`;
export const GithubLogo = styled(FaGithub)`
margin-top: 24px;
fill: var(--border);
width: 24px;
height: 24px;
flex-shrink: 0;
`;

