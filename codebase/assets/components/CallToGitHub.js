import React, { useState, useEffect, useReducer } from 'react';

function CallToGitHub() {
       const [data, setData] = useState(null);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const [login, setLogin] = useState(null);
       const [search, setSearch] = useState(null);

       useEffect(() => {
           if (!login) return;
           setLoading(true);
           fetch(`https://api.github.com/users/${login}`)
               .then((response) => response.json())
               .then(setData)
               .then(() => setLoading(false))
               .catch(setError);
       }, [login]);

       if(loading) return <h1>Loading.......</h1>

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;


       if (data) {
           return (<div>
               <h1>{data.name}</h1>
               <p>{data.location}</p>
               <img alt={data.login} src={data.avatar_url} />
           </div>);
       }

       return <div>
           <input type="text" value={search} onInput={e => setSearch(e.target.value)} />
           <button onClick={() => setLogin(search)} >Search</button>
       </div>;
}

export default CallToGitHub;