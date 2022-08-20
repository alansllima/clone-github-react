import React, { useState, useEffect } from 'react';
import { APIRepo } from '../../@types';
import { RepoService } from '../../service/repos/RepoService';
import { Container, Header, Main , Aside, Footer } from './styles';

const Grid: React.FC = () => {
  const [repos , setRepos] = useState<APIRepo[]>([]);
  const[search, setSearch] = useState('');

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
    <Header/>      
   
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