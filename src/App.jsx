import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import{HeaderComponent} from './Component/HeaderComponent';
import{FooterComponent} from './Component/FooterComponent';
import ContentComponent from './Component/ContentComponent';
import { MapDemo1 } from './Component/MapDemo1';
import { MapDemo2 } from './Component/MapDemo2';
import { MapDemo3 } from './Component/MapDemo3';
import { MapDemo4 } from './Component/MapDemo4';
import { MapDemo5 } from './Component/MapDemo5';
import { MapDemo6 } from './Component/MapDemo6';
import { MapDemo7 } from './Component/MapDemo7';
import { MapDemo8 } from './Component/MapDemo8';
import { MapDemo9 } from './Component/MapDemo9';
import { MapDemo10 } from './Component/MapDemo10';
import { Navbar } from './Component/Navbar';
import {Route , Routes}from 'react-router-dom';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import{ Favorites } from './Component/Favorites';
import{ Aboutus } from './Component/Aboutus';
import{ Contact } from './Component/Contact';
import { NetflixHome } from './Component/NetflixHome';
import { NetflixMovies } from './Component/NetflixMovies';
import { NetflixShows } from './Component/NetflixShows';
import { ErrorNotFound } from './Component/ErrorNotFound';
import { Watch } from './Component/Watch';
import {Team } from './Component/Team'
import { Playing } from './Component/Playing';
import { UseStateDemo1 } from './Component/UseStateDemo1';
import { UseStateDemo2 } from './Component/UseStateDemo2';
import { UseStateDemo3 } from './Component/UseStateDemo3';
import { FunctionDemo1 } from './Component/FunctionDemo1';
function App() {
  const [count, setCount] = useState(0)


  
  return(
     <div>
      <Navbar></Navbar>
      {/* <HeaderComponent></HeaderComponent> 
      <ContentComponent></ContentComponent>
      <MapDemo1></MapDemo1>
      <MapDemo2></MapDemo2>
      <MapDemo3></MapDemo3>
      <MapDemo4></MapDemo4>
      <MapDemo5></MapDemo5>
      <MapDemo6></MapDemo6>
      <MapDemo7></MapDemo7>
      <MapDemo8></MapDemo8>
      <MapDemo9></MapDemo9>
      <MapDemo10></MapDemo10>
      <FooterComponent></FooterComponent>  */}
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Favorites" element={<Favorites/>}></Route>
        <Route path="/Aboutus" element={<Aboutus/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/NetflixHome" element={<NetflixHome/>}></Route>
        <Route path="/NetflixMovies" element={<NetflixMovies/>}></Route>
        <Route path="/NetflixShows" element={<NetflixShows/>}></Route>
        <Route path="/*" element={<ErrorNotFound/>}></Route>
        <Route path="/Watch/:name" element={<Watch/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
        <Route path="/playing/:name" element={<Playing/>} > </Route>
        <Route path="/UseStateDemo1" element={<UseStateDemo1/>}></Route>
        <Route path="/UseStateDemo2" element={<UseStateDemo2/>}></Route>
        <Route path="/UseStateDemo3" element={<UseStateDemo3/>}></Route>
        <Route path="/FunctionDemo1" element={<FunctionDemo1/>}></Route>

      </Routes>
     
    </div>
)
}

export default App
