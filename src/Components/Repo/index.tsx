import React from 'react';
import { Link } from 'react-router-dom';
 import { Container,BreadCrumb, Stats, LinkButton, GitIcon, RepoIcon, ForkIcon, StarIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>   
          <RepoIcon/>
          <Link className={'username'} to ={'/alansllima'}>alansllima</Link>
          <span>/</span>
          <Link className={'reponame'} to ={'/alansllima/youtube-content'}>githubclone</Link>
      </BreadCrumb>
      <p>descricao com alguma informaçao bacana e legal</p>
      <Stats>
        <li><StarIcon/>
        <b>3</b>
        <span>forks</span>
        </li>
        
        <li><ForkIcon/>
        <b>0</b>
        <span>forks</span>
        </li>
      </Stats> 
      <LinkButton href={'https://'}>
      <GitIcon/>
      <span>View on GitHub</span>
      </LinkButton>    
      
    </Container>

  );
}

export default Repo;