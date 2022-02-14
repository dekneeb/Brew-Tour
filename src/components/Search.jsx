import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Search(){
    
    const [List, setList] = useState ([])
    const [state, setState] = useState ()
    const [city, setCity] = useState ()
    // const URL = `https://api.openbrewerydb.org/breweries/search?query=${query}`
    const URL = `https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}`

    const handleFetch = ()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            // console.log(json)
            setList(json)
        })
    }

    // useEffect(()=>{
    //     handleFetch()
    // }, [])


  const SearchState =(e) =>{
        console.log(e.target.value)
        setState(e.target.value)
    }
  const SearchCity =(e) =>{
        console.log(e.target.value)
        setCity(e.target.value)
    }

   const Submit = (e) =>{
       e.preventDefault()
    //    console.log('preventing default')
       handleFetch()
       
   }
    

    return(<div>

        <h1>🍻 Search All Breweries 🍻</h1>

        <section>
            <form onSubmit={Submit} >
                <input type='text' name='query' onChange={SearchCity} placeholder ='city'></input>
                <input type='text' name='query' onChange={SearchState} placeholder ='state'></input>
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