import React , {useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Main01 from './Main01'
import Carousel from './Carousel'
import TextCatgories from './TextCatgories'
import Préférences from './Préférences '
import TypedeplayText from './TypedeplayText'
import Typesdeplats from './Typesdeplats'
function Home() {
    const [Scrol , setScroll]=useState(false)
    const [Loading , setLoading]=useState(false)

    const changeBackground =()=>{
        console.log(window.scrollY)
        if(window.scrollY>10){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener('scroll' ,changeBackground )
    const Test55 = () =>{
        setLoading(true)
        console.log(Loading)
      }
      setTimeout(Test55, 2000);

    return (
        <div>
            {!Loading ?
            
            <div className="flex justify-center backgroundImage04	f-50" style={{backgroundColor:"#FC6539" ,width:"100%", height:"100%"}}> 
            <CircularProgress style={{color:"white" , marginTop:"340px",marginBottom:"340px"}}/>
            </div> : 
            <div> 
            <Main01 Scrol={Scrol}/>
            {/* Préférences   */}
            <Préférences/>
            {/* TextCatgories */}
            <TextCatgories/>
            <Carousel/>
            <TypedeplayText/>
            <Typesdeplats/>
            </div>
            }
            {/* Navbarhere */} 
            
        </div>
    )
}

export default Home
