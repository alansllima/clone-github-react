import  styled, {css} from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
 
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;

`;

export const Topside = styled.div`
  > header{
    display: flex;
    align-items: center;

     >a{
        margin-left: 8px;
        font-size: 14px;
        font-weight: 600;
        color: var(--link);
        text-decoration: none;
        &:focus, &:hover{
            text-decoration: underline;
        }
     }
  }
  >p{
    margin: 8px 0px 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;
export const Botside = styled.div`
>ul{
display: flex;
align-items: center;
 >li{
  display: flex;
  align-items: center;
  margin-right: 16px;
  >span{
    margin-left: 5px;
    font-size: 12px;
    color: var(--gray);
  }
 } 
}
.language{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  &.other{
    background-color: var(--other-language);
  }
  &.javascript{
    background-color: var(--javascript);
  }
  &.typescript{
    background-color: var(--typescript);
  }
}

`;

const iconCss = css`
width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
${iconCss}
`;
export const StarIcon = styled(RiStarLine)`
${iconCss}
`;
export const ForkIcon = styled(AiOutlineFork)`
${iconCss}
`;

