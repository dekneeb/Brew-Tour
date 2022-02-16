import {  Link } from "react-router-dom";
import '../nav.css'

const Navbar= () =>{
  return (
  <div className='navbar'>
    <li className='link'>
      <Link to="/home">Home</Link>
    </li>
    <li className='link'>
      <Link to="/search">Search</Link>
    </li>
    <li className='link'>
    <Link to='/breweries' >Passport</Link>
    </li>
  </div>
  );
}
export default Navbar;