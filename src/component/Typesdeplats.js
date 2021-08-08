import React , {useState} from 'react'
import Typesdeplatsmap from './map/Typesdeplatsmap'
const Typesdeplats = () => {
    const [TypePlates , setTypeplate]=useState([
        {Image:"Dessert.png" , 
        Name:"Dessert"},
        {Image:"Boissonsetcocktails.png" , 
        Name:"Boissons et cocktails"},
        {Image:"plats.png" , 
        Name:"plats"},
        {Image:"Entrée01.png" , 
        Name:"Entrée"},
        {Image:"Accompagnement.png" , 
        Name:"Accompagnement"}
    ])
    return (
        <div className="flex justify-center	 ml-20">
            {TypePlates.map((el)=><Typesdeplatsmap el={el}/>)}
        </div>
    )
}

export default Typesdeplats
