import '../Passport.css'
import {Link} from 'react-router-dom'

function Passport(props){

    console.log(props.addedStamps)

    return(<div className='pass_container'>
         <h2 className='french'> Where to next?  </h2>
         <img className='passport_gif' src={'https://c.tenor.com/ft2mQFVUR00AAAAC/fly-plane.gif'}/>
        <p> On your way to collect more stamps^</p>
       
     
        <section  className='brew_list'>

            {props.addedStamps.map(brew=>{
            
                if(brew.length == 0){
                    return ( null
                    // <ul key={props.addedStamps}><div className='card_stamp' ><li> <Link to={`/search/${brew}`}> <p className='brew_title'> {brew}</p></Link> </li></div></ul>
                    ) 
                }else{
                    

                const split = brew.split('-')
                console.log(split)
                // for(let i=0; i<split.length; i++){
                //     console.log(split[i])
                for(let i=0; i<split.length; i++){
                    // console.log(split[i])
                split[i] = split[i][0].toUpperCase()+ split[i].slice(1)
                
                  }
                 const title = split.join(" ")

                 return (<ul key={brew}><div className='card_stamp' ><li key={brew}> <Link to={`/search/${brew}`}> <p className='brew_title'> {title}</p></Link> </li></div></ul>) 

                }

                      
               
            })}
        </section>

       
      
    </div>)
}

export default Passport
