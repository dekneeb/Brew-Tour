import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../search.css'

function Search(){
    
    const [List, setList] = useState ([])
    const [state, setState] = useState ()
    const [city, setCity] = useState ()
    const URL = `https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&per_page=50`

    const handleFetch = ()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            setList(json)
        })
    }

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
    
    return(<div className='all'>

     
        

        <section className='form'>
        <h2>🍻 Search All Breweries 🍻</h2>
            <form onSubmit={Submit} >
                <input type='text' name='query' onChange={SearchCity} placeholder ='city'></input>
                <input type='text' name='query' onChange={SearchState} placeholder ='state'></input><br/>
       
                <input className='button' type='submit' value='Cheers! 🍻'></input>
            </form>
            </section> 
         
            <section className='breweries' >

                {List.map(list =>{
                    return(
                        <div key={list.id}><ul >
                       <Link to={`/search/${list.id}`}> <li className='title'> {list.name}</li></Link>
                       </ul> 
                       </div>
                    )
                })}
             
                </section>      
    </div>)
}

export default Search