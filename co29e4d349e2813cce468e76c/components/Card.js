import React from "react";


export default function Card(props){
    return(
        <div className="card">
        <div className = "card-img-box">
        <img src = {props.imageUrl} className="card-img"/>
        </div>
        
        <div className = "card-infos">
        <img src="./images/Fill.png" className="card-fill" />
        <p className = "card-location">{props.location}</p>
        <a className = "card-map" href={props.description}>View on Google Maps</a>
        <h1 className="card-title">{props.title}</h1>
        <span className = "card-date">{props.startDate} - {props.endDate}</span>
        <p className = "card-text">{props.description}</p>
        </div>
        </div>
    )
}