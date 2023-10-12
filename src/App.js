import { useEffect, useState } from 'react';
import './App.css';
import Tour from './tour';
const url = "https://course-api.com/react-tours-project"

function App() {
  const[tours,setTour]= useState([]);
  const removeTour = (id)=>{
    const newtour = tours.filter((t) => t.id !== id)
    setTour(newtour);
  }
  const api = ()=> {
    fetch(url).then((res) => res.json()).then((json)=>
      setTour(json)
    )
  }
  useEffect(()=>{
    api()
  },[])
  
  if(tours.length == 0){
    return(
      <div class="text-center mt-10">
        <h4 class="font-bold text-lg">No Tours Available</h4>
        <button onClick={()=> {api()}} class="border border-black-800 w-16">Refresh</button>
      </div>
    )
  }
  return (
    <Tour tours={tours} removeTour={removeTour}/> 
  );
}

export default App;
