import './App.css'
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {

  const [result, setResult] =useState("")
 
  const fetchHellofrombackend =async()=>{
const response = await axios.get("/api/giveHello");       
 let fetchedresult=response.data.message
        setResult(fetchedresult)
  }
             useEffect(() => {
           fetchHellofrombackend();
}, []);

  return (
  
      <> this is page at path / that i will deploy on nginx using dockerfile and compose file and bash script ,i am using nginx to serve files and deploy.sh to run compose file
      <p>{result}</p>
      </>
  )
}

export default App
