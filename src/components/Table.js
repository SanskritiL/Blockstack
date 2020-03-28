import React,{useState, useEffect} from "react"



export default function Table(){

    useEffect(()=>{

        fetch('results.json')
        .then(res =>res.json())
        .then(data => console.log(data))
        



    },[])

    return(
       <div>
           <nav class="navbar navbar-light bg-light">
            <span class="navbar-text">
              <h3>Your transactions</h3>
            </span>
        </nav>
     </div>
    )
    

}