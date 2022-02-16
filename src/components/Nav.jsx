import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className='navbar'>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
  </div>
  );
}
export default Navbar;