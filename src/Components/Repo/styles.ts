import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import{ FaGithub } from 'react-icons/fa'

 const iconCss = css`
 fill: var(--icon);
width: 16px;
height: 16px;
flex-shrink: 0;
 `; 
export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 16px;

>p{
    font-size: 16px;
}
`;
export const BreadCrumb = styled.div`
margin-bottom: 16px;

display: flex;
align-items: center;
flex-wrap: nowrap;
white-space: nowrap;
font-size: 18px;
>a{
    color: var(--link);
    text-decoration: none;
    margin-left: 5px;
    &:hover,&:focus{
       text-decoration : underline              ;
    }
    &.username{
    margin-left: 8px;
}
   &.reponame{
    margin-left: 8px;
    font-weight: 600;
   }
}
>span{
    padding: 0 5px;
}
`;
export const Stats = styled.ul`
display: flex;
margin-top: 16px;
align-items: center;
li{
    display: flex;
    align-items: center;
    margin-right: 9px;
    >*{
       margin-right :7px ;
       color: var(--gray);
    }
    
}
`;
export const LinkButton = styled.a`
   margin-top: 24px;
    background-color: var(--gray-dark);
    display: flex;    
    width: max-content;
    padding: 12px 17px;   
    border-radius: 20px;
    align-items: center;  
    text-decoration :none ;

>span{
    color: var(--primary);
    margin-left: 3px;
    font-size: 18px;
   // justify-content: center;
    color: aliceblue;
    
   // align-items: center;
}
>svg{
    fill: var(--primary);
    margin-right: 10px;
}
`;
export const RepoIcon = styled(RiBookMarkLine)`${iconCss}`;
export const ForkIcon = styled(AiOutlineFork)`${iconCss}`;
export const StarIcon = styled(RiStarLine)``;
export const GitIcon = styled(FaGithub)`${iconCss}`;