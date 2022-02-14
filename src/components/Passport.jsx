import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Passport(props){

    console.log(props.addedStamps)

    return(<div>
        <h1>  Passport Stamps 🛫 </h1>

        <section>

            {props.addedStamps.map(brew=>{
                return (<ul><li>{brew}</li></ul>)
            })}
        </section>
            
       

       

      
    </div>)
}

export default Passport




// {props.addedStamps.map((oneStamp, index)=>{
           
//     return(<li
//     key={index}>

//        {/* <Link to={`/search/${oneStamp}`}>{oneStamp}</Link> */}
//        {oneStamp}
        
//     </li>)
// })} 