import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Passport(props){
  


    return(<div>
        <h1>  Passport Stamps </h1>

        {props.addedStamps.map((oneStamp, index)=>{
           
            return(<li
            key={index}>

               {/* <Link to={`/search/${oneStamp}`}>{oneStamp}</Link> */}
               {oneStamp}
                
            </li>)
        })}

      
    </div>)
}

export default Passport