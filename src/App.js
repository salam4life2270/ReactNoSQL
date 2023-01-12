import {useEffect, useState} from 'react';


function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(()=>{
    const getGreeting = async()=>{ 
      const response = await fetch("http://localhost:5001");
      const data = await response.json(); 
      setGreeting(data[0].greeting);
    }
    
    getGreeting();
  }, [])
  
  return (
    <div>
    {greeting}
    </div>
  );
}

export default App;
