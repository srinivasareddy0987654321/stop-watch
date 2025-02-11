
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const[time,settime]=useState(0);
  const[running,setrunning]=useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        settime((prevtime)=>prevtime+10)
      },10);
    }else if(!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);

  return (
    <div className="App">
      <h1>STOP-WATCH</h1>
      <div>
        <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time/10)%100)).slice(-2)}</span>

      </div>
      <div>
        {running ? (
        <button onClick={()=>{setrunning(false)}}>Stop</button>


        ):(
        <button onClick={()=>{setrunning(true)}}> Start</button>

        )}
        <button onClick={()=>{settime(0)}}>Reset</button>


      </div>
    </div>
  );
}

export default App;
