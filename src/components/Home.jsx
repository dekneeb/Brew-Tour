import {Link} from 'react-router-dom'

function Home(){
    return(<div> 

        <nav></nav>
        <h1>🍻Brew Tour🍻</h1>
        
       <Link to='/breweries' >View Your Passport</Link>
       <Link to='/search' >Search Breweries</Link>
        
        </div>)
}

export default Home