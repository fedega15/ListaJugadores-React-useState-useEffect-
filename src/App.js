import './App.css'
import ListOfGifs from "./componentes/ListOfGifs"
import {Link, Route, } from "wouter"

 
export default function App() {
    return (
      <div className="App">
        <section className="App-content">
          <h1>LISTA DE GIFS</h1>
          <Link href="/gif/riquelme" className="link">*riquelme</Link>
          <Link href="/gif/messi" className="link">*messi</Link>
          <Link href="/gif/maradona" className="link">*maradona</Link>
          <Link href="/gif/ronaldo" className="link">*ronaldo</Link>
           <Route 
              path="/gif/:keyword" 
              component={ ListOfGifs}
            />
        
        </section>
      </div>

)
}


