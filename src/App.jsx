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
function App() {
  const [count, setCount] = useState(0)


  
  return(
     <div>
      <HeaderComponent></HeaderComponent>
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
      <FooterComponent></FooterComponent>
    </div>
)
}

export default App
