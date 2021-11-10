// import logo from './logo.svg';
import {React,useEffect,useState} from "react";
import axios from "axios";
import './App.css';


const CustomerLocation=()=> {

    const API_endpoint =`https://api.openweathermap.org/data/2.5/weather?`
const API_Key =`ae4f3a6d1b8525d6a61ceea3387a12a7`
  const [latitude,setLatitude] = useState(""); // getting latitude from api;
  const[longitude,setLongitude] = useState("");//getting longitude from api;
  const[city,setCity]=useState({});//here city name is set
  useEffect(()=>{
navigator.geolocation.getCurrentPosition((position)=>{
setLatitude(position.coords.latitude);//getting lattitude from api and setting latitude ;
setLongitude(position.coords.longitude);
// console.log(position.coords)
});
// console.log(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_Key}`);
 let finalAPIEndpoint= `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_Key}`
axios.get(finalAPIEndpoint).then((res)=>{
  setCity(res.data)
})
  },[])
  return (
    <div className="App">
      <h1>City Name:{city.name}</h1>
     
    </div>
  );
}

export {CustomerLocation};