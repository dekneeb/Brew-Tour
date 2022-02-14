import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className='navbar'>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
    <Link to='/breweries' >Passport</Link>
    </li>
  </div>
  );
}
export default Navbar;