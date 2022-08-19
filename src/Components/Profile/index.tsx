import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../Components/ProfileData';
import RepoCard from '../RepoCard';
import RandomCalendar from '../RandomCalendar';
import { APIRepo, APIUser } from '../../@types';

interface Data{
  user?: APIUser;
  repos?: APIRepo[];
  error? : string;
}

const Profile: React.FC = () => {

const{username} = useParams();

/* const [user,setUser] = useState<User>();
const [repos,setRepos] = useState<User>(); */
const [data,setData] = useState<Data>();

useEffect(()=>{
  Promise.all([
    fetch(`https://api.github.com/users/${username}`),  
    fetch(`https://api.github.com/users/${username}/repos`)
  ]).then(async(responses)=>{
    const[userResponse, reposResponse]= responses;

    if(userResponse.status == 404){
      setData({error:'User not found!'})
      return
    }
    if(reposResponse.status == 404){
      setData({error:'Repos not found!'})
      return
    }

    const user = await userResponse.json();
    const repos = await reposResponse.json();
    
    const shuffledRepos = repos.sort(()=> 0.50 - Math.random());
    const slicedRepos = shuffledRepos.slice(0,2);
     setData({user, repos : slicedRepos}) 
     

  })

},[username]);

if(data?.error){
  return <h1>{data.error}</h1>
}
if(!data?.user || !data.repos){
  return<h1>Loading...</h1>
}

/* console.log(user)
console.log(repos) */
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
      key={item.forks}
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