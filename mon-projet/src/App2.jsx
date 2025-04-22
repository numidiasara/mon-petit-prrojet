import './App.css'
import {useState } from 'react'

function App() {
  
//MOUVAISE PRATIQUE 
//let prenom = "David"
//let nom = "Wils"

// Bonne pratique

const [prenom, setPrenom]=useState("David")
const [nom, setNom]= useState("Wils")
const [age, setAge] = useState(28)

function changePrenomNom(){
  setPrenom("sara")
  setNom("Medjmadj")
  }
  function augmenteAge(){
    setAge(age + 1)
}
  function diminueAge(){
    setAge(age - 1)
}

  return (
    <>
     <h1>Bonjour {prenom} {nom}</h1>
     <button onClick={changePrenomNom}>change le prenom et le nom</button>
     <h2> vous avez {age} ans </h2>
     <button onClick= {augmenteAge}>+ </button>
     <button onClick= {diminueAge}>- </button>
    </>
  )
}

export default App
