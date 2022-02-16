import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../onebrew.css'


function OneBrewery(props){

    const cb= document.getElementById('stamp')
   

    const [oneBrew, setOneBrew] = useState({})

    const brew = useParams()
    // console.log(brew.id)

    const URL = `https://api.openbrewerydb.org/breweries/${brew.id}`

    useEffect(()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            setOneBrew(json)
           
        })

    }, [])

    console.log(oneBrew)


    const notify = () =>{
        document.getElementById('empty').innerText = "Stamped!"

    }
   
    


    return(<div key={brew.id}>
        
       <div className='table'>
        <section className='container_onebrew'>
        <h2 className ='oneBrew_title'>{oneBrew.name}</h2>
        <p>Brew Type: {oneBrew.brewery_type}</p>
        <p>Phone number: {oneBrew.phone}</p>
        <a href={`${oneBrew.website_url}`}>{oneBrew.name} website</a> 
        <a href={`https://maps.google.com/?q=${oneBrew.street},${oneBrew.city}, ${oneBrew.state}, ${oneBrew.postal_code}`}>
        <p>{oneBrew.street}</p>
        <p> {oneBrew.city}, {oneBrew.state} {oneBrew.postal_code}</p>
        </a>
        </section>
        </div><br/><br/>
        <section className='stamp_onebrew'>
            <div className='top'>
        <p className='visited'> Visited this brewery already? Add a stamp to your passport!</p></div>
        <label htmlFor='stamp'>
        <input onClick={() => props.addStamp(oneBrew.id)} type='button' className ='stampbutton' id='stamp' name='stamp' value='Stamp it!'></input>
        </label>
        <div className='empty'></div>
        </section>

    </div>)
}

export default OneBrewery