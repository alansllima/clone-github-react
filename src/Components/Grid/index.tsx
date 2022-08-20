import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { APIRepo } from '../../@types';
import { RepoService } from '../../service/repos/RepoService';
import { Container, Header, Main , Aside, Footer } from './styles';

// import { Container } from './styles';


interface Data{ 
  repos: Repo[];
}
interface DataUser{ 
  data: User;
}
interface Repo{ 
  id: number ;
  name: string;
  description : string;
}
interface User{ 
  id: number ;
  login: string;  
}
interface IResult{ 
  data: IData;
  status: string;  
}

interface IData{ 
  repos: Repo[];    
}

const Grid: React.FC = () => {
  const [repos , setRepos] = useState<APIRepo[]>([]);
  const[search, setSearch] = useState('');
  const[user, setUser] = useState<User>();

useEffect( ()=>{
RepoService.getAll()
.then((res)=>{   
      
   if(res instanceof Error){
    alert(res.message)
    return;
   }
   setRepos(res.data)
})

},[])


const filteredData = search.length > 0 ?repos.filter(filter => filter.name.toLowerCase().includes(search.toLocaleLowerCase()))
: [];
  return (
  <Container>
    <div className='container'>
    <Header>
      <h1>{user?.login}</h1>
    </Header>
    <Main>
      <input 
      placeholder='---Buscar---'     
      onChange={(e)=> 
        setSearch(e.target.value)     
        }
        value ={search}
      />      
 
    {search.length > 0 ? (
      filteredData.map((data)=> ( 
      <ul key={data.name}>
        <li>{data.name}</li>
        <li>{data.description}</li>
      </ul>   
    ))
    ):(repos.map((data)=> ( 
      <ul key={data.name}>
        <li>{data.name}</li>
        <li>{data.description}</li>
      </ul>   
    )))}

    </Main>
    <Aside></Aside> 
    <Footer></Footer> 
    </div>  
  </Container>  
  );
}

export default Grid;