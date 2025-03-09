import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8000})


wss.on("connection",(socket)=>{
   console.log("Connnected to ws server 8000");
   
    socket.on("message",(e)=>{           
        if(e.toString()==="hi"){
            socket.send("Hello")
        }
        else{
            socket.send("did not said hi, say hi to recieve hello")
        }
    })
})