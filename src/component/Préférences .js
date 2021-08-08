import React  , {useState} from 'react'
import PrefrenceMap from './map/PréférencesMap '
const Préférences  = () => {
    const [Prefernce01 , setPrefernce]=useState([{
        Name:"Végétarien", 
        Image:"Végétarien.png",  
    } ,
    {
        Name:"Végan", 
        Image:"Vegan.png"
    },
    {
        Name:"Burger", 
        Image:"Burger.png",  
    } ,
    {
        Name:"Pizza", 
        Image:"Pizza.png",  
    } ,
    {
        Name:"Pâtes", 
        Image:"Pate6.png",  
    } ,
    {
        Name:"Sushi ", 
        Image:"Suchi.png",  
    } ,
    {
        Name:"Repas variés", 
        Image:"Vegance.png"
    }, 
   
    {
        Name:"Poisson et Fruit de mer", 
        Image:"PoissonetFruit.png"
    } , 
    {
        Name:"Sans sucre", 
        Image:"Scure.png"
    },
    {
        Name:"Sans sel", 
        Image:"Slat.png"
    },
    {
        Name:"Halal",
        Image:"Hala.png"
    }])
    return (
        <div className="flex justify-center m-10	">
            {Prefernce01.map((el , i)=><PrefrenceMap el={el} i={i}/>)}
        </div>
    )
}

export default Préférences 
