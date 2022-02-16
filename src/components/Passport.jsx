import '../Passport.css'
import {Link} from 'react-router-dom'

function Passport(props){

    console.log(props.addedStamps)

    return(<div>
        <h2 className='french'>  Passport Stamps 🛫 </h2>
     
        <section  className='brew_list'>

            {props.addedStamps.map(brew=>{
            
                
                // const split = brew.split('-')
                // console.log(split)
                // // for(let i=0; i<split.length; i++){
                // //     console.log(split[i])
                // for(let i=0; i<split.length; i++){
                //     // console.log(split[i])
                // split[i] = split[i][0].toUpperCase()+ split[i].slice(1)
                
                //   }
                //  const title = split.join(" ")

                    return (<ul><div className='card_stamp'><li key={brew}> <Link to={`/search/${brew}`}> <p className='brew_title'> {brew}</p></Link> </li></div></ul>)   
               
            })}
        </section>
      
    </div>)
}

export default Passport
