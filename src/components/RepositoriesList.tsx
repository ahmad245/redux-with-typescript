import React, { useState } from 'react'
import {useActions} from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';



const RepositoriesList=()=>{
    const [term, setTerm] = useState('');

    const {fetchRepositories} =useActions();
    const {data,error,loading} = useTypedSelector((state) => state.repositories)
   

    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
       event.preventDefault();
      fetchRepositories(term);
    }
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e)=>setTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <div>loading</div>}
    {!error && !loading && data.map((name)=><div key={name}>{name}</div>)}
        </div>
    )
}


export default RepositoriesList;