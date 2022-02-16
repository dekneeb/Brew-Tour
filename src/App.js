
import './App.css';
import Passport from './components/Passport';
import Search from './components/Search';
import OneBrewery from './components/OneBrewery';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Nav'


// import Login from './components/Login'

function App() {

  const stamps = localStorage.getItem('addedStamps')

  const passportList = stamps ? [...localStorage.getItem('addedStamps').split(",")]: null 

  const [addedStamps, setAddedStamps] = useState(passportList || [])

  const addStamp = (stamp) =>{
    
    setAddedStamps([stamp, ...addedStamps])

  }

   useEffect(()=>{

      localStorage.setItem("addedStamps", addedStamps)

    })


  return (
    <div className="App">
       <Navbar />
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/breweries' 
        element={<Passport 
              addedStamps= {addedStamps}
              />} />
     <Route path='/search' element={<Search />} />
     <Route path='/search/:id' 
          element={ <OneBrewery 
                     addStamp = {addStamp} />} />
      </Routes>
    </div>
  );
}

export default App;
