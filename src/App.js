import {useEffect, useState} from 'react';


function App() {
  const [greeting, setGreeting] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(()=>{
    const getGreeting = async()=>{ 
      const response = await fetch("http://localhost:5001");
      const data = await response.json(); 
      setGreeting(data[0].greeting);
    }

    const getTopic = async()=>{ 
      const response = await fetch("http://localhost:5001");
      const data = await response.json(); 
      setTopic(data[1].topic);
    }
    
    getGreeting();
    getTopic();
  }, [])

  return (
    <div>
    {greeting}
    <br></br>
    {topic}
    </div>
  );
}

export default App;
