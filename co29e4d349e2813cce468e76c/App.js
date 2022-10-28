import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

 // <Navbar/>
export default function App(){
    const cards = data.map(item =>{
    return(      
        <Card
        key = {item.key}
        {...item}
        />
    )
    });
    
    return(
        <div>
        <Navbar/>
        <section className = "card-list"> 
        {cards}
        </section>
        </div>
    )
}