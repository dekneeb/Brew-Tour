import {Link} from 'react-router-dom'
import '../home.css'
import {useEffect, useState} from 'react'

function Home(){

    const [fact, setFact] = useState()
    const URL = 'https://asli-fun-fact-api.herokuapp.com/'

    const handleFetch = () =>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json.data.fact)
            setFact(json.data.fact)
        })
    }

    useEffect(()=>{
        handleFetch()
    }, [])


    return(<div> 

        <section className='banner'>
        <h1>🍻Brew Tour🍻</h1>
        <h3>A place explore all breweries your city has to offer.</h3>
       
        </section>
            <section className='p'><Link to='/breweries' ><img className="card" src={require('../images/passport.png')}></img></Link>
            <Link to='/search' ><p className='gif'>Search Breweries </p></Link></section><br/>
            <h4>Fun Fact: {fact}</h4><br/>
   
            
        </div>)
}

export default Home