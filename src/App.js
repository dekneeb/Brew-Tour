
import './App.css';
import Passport from './components/Passport';
import Search from './components/Search';
import OneBrewery from './components/OneBrewery';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'




function App() {

  const [addedStamps, setAddedStamps] = useState([])

  const addStamp = (stamp) =>{
    
    setAddedStamps([stamp, ...addedStamps])
  }


  return (
    <div className="App">
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/breweries' 
        element={<Passport 
              addedStamps= {addedStamps}/>} />
     <Route path='/search' element={<Search />} />
     <Route path='/search/:id' 
          element={ <OneBrewery 
                     addStamp = {addStamp} />} />
      </Routes>
    </div>
  );
}

export default App;
