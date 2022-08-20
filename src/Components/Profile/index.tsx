import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../Components/ProfileData';
import RepoCard from '../RepoCard';
import RandomCalendar from '../RandomCalendar';
import { APIRepo, APIUser } from '../../@types';
import {UserService} from '../../service/users/UserService'
import {RepoService} from '../../service/repos/RepoService'

interface IData{
  user?: APIUser,
  repos?:APIRepo[],
  error?: string

}

const Profile: React.FC = () => {

const{username} = useParams();

const [user,setUser] = useState<APIUser>();
const [repos,setRepos] = useState<APIRepo[]>(); 
const [data,setData] = useState<IData>();

useEffect(()=>{
  Promise.all([
    UserService.getUser(username),    
    RepoService.getAll()  
  ]).then(async (responses)=>{
    const[userResponse, reposResponse]= responses;    
    setData({user: userResponse, repos : reposResponse.data})
      
  },(erro)=>{
    console.log(erro)
    setData(erro)
  })
  
  },[username])

if(data?.error){
  return <h1>{data.error}</h1>
}
if(!data){
  return <h2>busque por um usuario</h2>
}
if(!data?.user || !data.repos){
  return<h1>Loading...</h1>
}
console.log('renderizou')

  const TabContent = () => (
    <div className="content">
      <RepoIcon/>
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )

  

  return (
    <Container>
      <Tab className='desktop'>
        <div className="wrapper">
        <span className="offset"></span>
        <TabContent/>
        <span className="line"></span>
        </div>
        
      </Tab>
    <Main>
    <LeftSide>
      <ProfileData
      username={data.user.login}
      name={'Tchenhazinha'}
      avatarUrl={'https://avatars.githubusercontent.com/u/12252804?v=4'}
      followers={data.user.followers}
      following={data.user.following}
      company={'Keeggo sa d asds sa  as s'}
      location={'Sao paulo, brazil'}
      email={'alan@gmail.co s s dasd s m'}
      blog={'alan.com.br'}
      />
    </LeftSide>
    <RightSide>
      <Tab className='mobile'>
        <TabContent/>
        <span className="line"></span>
      </Tab>
      <Repos>
        <h2>Random Repos</h2>
      <div>{data.repos.map((item) =>( 
       
      <RepoCard
      key={item.id}
      username={item.owner.login}
      reponame={item.name}
      description={item.description}
      language={item.language}
      stars={item.stargazers_count}
      forks={item.forks}
      />
        ))}      
        </div>
      </Repos>
      <CalendarHeading>
        Random Calendar
      </CalendarHeading>
      <RandomCalendar/>
    </RightSide>
    </Main>
    </Container>

  );
};

export default Profile;