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

//const [username,setUsername] = useState();
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
      name={data.user.name}
      avatarUrl={data.user.avatar_url}
      followers={data.user.followers}
      following={data.user.following}
      company={data.user.company}
      location={data.user.location}
      email={data.user.email}
      blog={data.user.blog}
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