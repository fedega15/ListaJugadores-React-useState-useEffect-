import React from "react"
import './Gif.css'

export default function Gif ({title, id , url}) {
    return (
        <a href={`#${id}`} className="Gif"  >
                  <h4>TITLE:  {title} </h4>
                  <br></br>
                  <small> ID:  {id} </small>       
                  <br></br>            
                  <img src={url} />
               </a>

    )
}