import React, {useState} from 'react';
import {Message} from './message'
import './App.css';


function App(){
  let [count,setCounter] = useState(1)
  let [Morning,setNight] = useState(true)
  return(
    
    <div className={`App box ${Morning?'night':''}`}>
    <h1>Good {(Morning?'night':'morning')}</h1>  
    <Message counter={count}/>
    <button onClick={()=> setCounter(count+1)}>Update Counter</button>
    <button onClick={()=>setNight(!Morning)}>Update Day</button>
    </div>
  )
  
}
export default App;
