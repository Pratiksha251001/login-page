import React from "react";
import {useLocation}from'react-router-dom';
function Home(){
    const location=useLocation()
    return(
        <div className="Homepage">
            <h1>Hello {location.state.id}and welcome</h1>
        </div>
    )
}
export default Home