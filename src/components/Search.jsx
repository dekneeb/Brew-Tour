import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Search(){
    
    const [List, setList] = useState ([])
    const [query, setQuery] = useState ()
    const URL = `https://api.openbrewerydb.org/breweries/search?query=${query}`

    const handleFetch = ()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            setList(json)
        })
    }

    // useEffect(()=>{
    //     handleFetch()
    // }, [])


  const SearchInput =(e) =>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }

   const Submit = (e) =>{
       e.preventDefault()
       console.log('preventing default')
       handleFetch()
       
   }
    

    return(<div>

        <h1>🏖 Search All Breweries 🏖</h1>

        <section>
            <form onSubmit={Submit} >
                <input type='text' name='query' onChange={SearchInput} placeholder ='search breweries here'></input>
                <input  type='submit' value='Cheers! 🍻'></input>
            </form>
            
            </section>  
            <section >

                {List.map(list =>{
                    return(
                       <Link to={`/search/${list.id}`}> <p> {list.name}</p></Link> 
                    )
                })}
             
                </section>      
    </div>)
}

export default Search