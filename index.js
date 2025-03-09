import { WebSocketServer } from "ws";

//creating an instance of websocket
const wss=new WebSocketServer({port:8000})

// initializing the connection
//when there is a  "connection" the control reaches inside of the callback 
//just like app.post('/',(req,res)=>{})

//here it is socket it is persistent, it stays connected 
wss.on("connection",(socket)=>{
   console.log("Connnected to ws server 8000");
    

   //inside this we can add logic 
   //socket.on interacting at socket level,  "message" to communicate
   // the callback (e) gives the message that is coming from the client just like req.body
    socket.on("message",(e)=>{            
        //any api logic
        if(e.toString()==="hi"){
            socket.send("Hello")   //socket.send is used to send the message to the server
        }
        else{
            socket.send("did not said hi, say hi to recieve hello")
        }
    })
})