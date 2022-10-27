import { useState } from "react";



function NumberCounter() {
  const [Count, setCounter] = useState("0");

  return (
    
      <div>
      <h1 className="font-bold">Counter Value - {Count}</h1>
      <div>
      <button onClick={()=>setCounter(Count+1)}>Increase counter</button>
      <button onClick={() => setCounter(0)}>Reset counter</button>
      <button onClick={() =>setCounter(Count - 1)}>Decrease counter</button>
      </div>
    </div>
    
  );
}
export default NumberCounter;