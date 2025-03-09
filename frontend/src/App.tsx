import { useEffect, useState } from "react"


function App() {
  
  const [text, setText]=useState<string>("");
  const [socket,setSocket]=useState<WebSocket | null >(null)

  const handleSend=()=>{
     
    socket?.send(text)
    setText("")
  }

  useEffect(()=>{
   
    const ws=new WebSocket("ws://localhost:8000")
    setSocket(ws)
    ws.onmessage=(e)=>{
      alert(e.data);
    }


  },[])

  return (
    <> 
      <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter any text" />
      <button onClick={handleSend}>Send</button>
      </div>
    </> 
  )
}

export default App
