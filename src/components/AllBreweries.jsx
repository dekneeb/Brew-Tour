import {useEffect, useState} from 'react'

function AllBreweries(){
    const [allBreweries, setAllBreweries] = useState ([])
    const URL = 'https://api.openbrewerydb.org/breweries/'

    useEffect(()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            setAllBreweries(json)
        })
        
    }, [])


    return(<div>
        <h1>  Hello All Breweries </h1>

        {allBreweries.map(brewery =>{
                return(
                    <p>{brewery.name}</p>)
        })}
      
    </div>)
}

export default AllBreweries