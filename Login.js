import React, { useState } from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";

function Login(){

    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8001/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("user have not sine up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);  
            })

        }
        catch(e){
            console.log(e);
        }
        
    }
}
