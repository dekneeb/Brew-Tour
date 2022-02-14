
import './App.css';
import Passport from './components/Passport';
import Search from './components/Search';
import OneBrewery from './components/OneBrewery';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Login from './components/Login'




function App() {

  const passportList = [...localStorage.getItem('addedStamps').split(",")]

  const [addedStamps, setAddedStamps] = useState(passportList || [])

  const addStamp = (stamp) =>{
    
    setAddedStamps([stamp, ...addedStamps])

  }

   useEffect(()=>{

      localStorage.setItem("addedStamps", addedStamps)


    })

 

 

  // function storage(){
  //   const state = localStorage.getItem("addedStamps");
  //   if (addedStamps) setAddedStamps({addedStamps : JSON.parse(addedStamps)})
  // }
  // storage()

 




  return (
    <div className="App">
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
