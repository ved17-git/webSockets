import { useEffect, useState } from "react"

//client side
function App() {
  
  const [text, setText]=useState<string>("");
  const [socket,setSocket]=useState<WebSocket | null >(null)

  const handleSend=()=>{
    //now using that useState hook in const [socket,setSocket]=useState
    //all the property of ws has come into socket 
    //sending socket.send, which lets to send the msg from the input box to server
    socket?.send(text)
    setText("")
  }


  //on the FIRST MOUNT/RENDER of this component we want to establish a connection, using useEffect
  useEffect(()=>{
   
    const ws=new WebSocket("ws://localhost:8000")  // just like cons res=await axis.get("")
    //Now we want to use this ws to send to the server using ws.send
    //but ws is declared in useEffect, hence we create a state-> const [socket,setSocket]=useState() 
    setSocket(ws) // so that we can use ws

    //here we are getting the response from the server and altering it
    //(e) => whatever the data from the backend
    ws.onmessage=(e)=>{
      alert(e.data);
    }

    //can give a bunch of callbacks like error,etc.

    // ws.onerror=()=>{

    // }
    // ws.onopen=()=>{

    // }
    // ws.onclose()=>{

    // }


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
