 import React, { useState } from "react";
 import axios from "axios";
import{useNevigate,Link} from "react-router-dom"

function Login(){
    const histry=useNevigate();

    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:27017/signup",{
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
    return(
        <div className="login">
            <h1>Signup</h1>
            <form action="post">
                <input type="email"onchange={(e)=>{setemail(e.target.value)}} placeholder="Email"/>
                <input type="password"onchange={(e)=>{setpassword(e.target.value)}} placeholder="Password"/>
                <input type="submit" onclick={submit}/>
                </form>
                
                <br/>
                <p>OR</p>
                <br/>
                <Link to="/">Login Page</Link>
        </div>
    )
}