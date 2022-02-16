
import './App.css';
import AllBreweries from './components/AllBreweries';
import Search from './components/Search';
import OneBrewery from './components/OneBrewery';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/breweries' element={<AllBreweries/>} />
     <Route path='/search' element={<Search />} />
     <Route path='/search/:id' element={ <OneBrewery />} />
      </Routes>
    </div>
  );
}

export default App;
