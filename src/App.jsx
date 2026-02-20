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
import { Employees } from './Component/Employees';
import { ShlashPage } from './Component/ShlashPage';
import { Users } from './Component/Users';
import { FormDemo1 } from './Component/form/FormDemo1';
import { FormDemo2 } from './Component/form/FormDemo2';
import { FormDemo3 } from './Component/form/FormDemo3';
import { InputDemo1 } from './Component/input/InputDemo1';
import { FormDemo4 } from './Component/form/FormDemo4';
import { FormDemo5 } from './Component/form/FormDemo5';
import { FormDemo6 } from './Component/form/FormDemo6';
import { FormDemo7 } from './Component/form/FormDemo7';
import { FormDemo8 } from './Component/form/FormDemo8';
import { FormDemo9 } from './Component/form/FormDemo9';
import { ApiDemo } from './Component/api/ApiDemo';
import { ApiDemo1 } from './Component/api/ApiDemo1';
import { ApiDemo2 } from './Component/api/ApiDemo2';
import { OmdbSearch } from './Component/api/OmdbSearch';
import { MovieDetails } from './Component/MovieDetails';
import ApiDemo3 from './Component/api/ApiDemo3';

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
        <Route path="/Employees" element={<Employees/>}></Route>
        <Route path="/" element={<ShlashPage/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="/FormDemo1" element={<FormDemo1/>}></Route>
        <Route path="/FormDemo2" element={<FormDemo2/>}></Route>
        <Route path="/FormDemo3" element={<FormDemo3/>}></Route>
        <Route path="/InputDemo1" element={<InputDemo1/>}></Route>
        <Route path="/FormDemo4" element={<FormDemo4/>}></Route>
        <Route path="/FormDemo5" element={<FormDemo5/>}></Route>
        <Route path="/FormDemo6" element={<FormDemo6/>}></Route>
        <Route path="/FormDemo7" element={<FormDemo7/>}></Route>
        <Route path="/FormDemo8" element={<FormDemo8/>}></Route>
        <Route path="/FormDemo9" element={<FormDemo9/>}></Route>
        <Route path="/ApiDemo" element={<ApiDemo/>}></Route>
        <Route path="/ApiDemo1" element={<ApiDemo1/>}></Route>
        <Route path="/ApiDemo2" element={<ApiDemo2/>}></Route>
        <Route path="/OmdbSearch" element={<OmdbSearch/>}></Route>
        {/* include title in URL for readability (encoded) */}
        <Route path="/MovieDetails/:id/:title" element={<MovieDetails/>}></Route>
        <Route path="/MovieDetails/:id" element={<MovieDetails/>}></Route>
        <Route path="/ApiDemo3" element={<ApiDemo3/>}></Route>

      </Routes>
     
    </div>
)
}

export default App
