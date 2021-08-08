import React , {useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

function Main01({Scrol}) {
    const [TogelHover , setTogelHover]=useState(false)
    return (
        <div >
             <div className="backgroundImage02" >
                 {/* <video autoPlay loop muted
                style={{
                    position:"absolute" , 
                    width:"100%" , 
                   left:"50%",
                   top:"300px",
                   height:"849px",
                   objectFit:"cover",
                  
                   transform:"translate(-50%,-50%)" ,
                   zIndex:"-1", 
                  
                
                }}
            >
            <source src="Joan's Pantry   20 sec Food Video.mp4"></source>
                
            </video> */}
            <div className="BackgroundimageFullimage">
            <div className={`flex compondent ${Scrol && "OppscityAnimation"}`}  style={{backgroundColor:Scrol &&"#FC653A"}}>
                
                    <div   className="flex justify-start w-6/12"  >
                        {/* Flexendstart */}
                        <div style={{marginTop:"10px" , marginBottom:"10px" , marginLeft:"4px"}}>
                            {/* Image */}
                            
                        <img style={{width:"50%"}} src="logobackground.svg"/>
                        </div>
                    </div>

                    <div className="justify-end flex w-6/12" >
                        {/* Flexendhere */}
                        <div style={{fontSize:"18px"}} className="pt-5 font-semibold  		 	">
                            {/* Text */}
                            <Typography style={{color:"white"}} className="p-5 " variant="p">Accueil</Typography>
                            <Typography onClick={()=>setTogelHover(!TogelHover)}  style={{color:"white"}} className="p-5 curser" variant="p">Notre concept  </Typography>

                            <Typography style={{color:"white"}} className="p-5 " variant="p">Blog</Typography>
                            <Typography style={{color:"white"}} className="p-5" variant="p"> Connexion</Typography>
                        </div>
                    </div>
             </div>
             {/* Onhover  */}
             {TogelHover && <div className="flex justify-end compondent01 absolute testhere TestANimationclick  "  >
                    <div cla  style={{backgroundColor:"white" , width:"150px" , marginRight:"150px"}}>
                        <div className="p-2  HoverTest">
                        <Typography className="text-sm"  variant="p">Rtl version</Typography> 
                        </div>
                        <div className="p-2 HoverTest">
                        <Typography className="text-sm" variant="p">Grild listen</Typography>
                        </div>
                        <div className="p-2 HoverTest">
                        <Typography className="text-sm" variant="p">Tefsd</Typography>
                        </div>
                        <div className="p-2 HoverTest">
                        <Typography className="text-sm" variant="p">dzadfa</Typography>
                        </div>
                    </div>
               
                </div>}
               
           {/* Text in mid */} 
           {/* 40px */}
           <div className="ScaleAnimation ">
                <div style={{marginTop:TogelHover ? "40px" : "140px"}}  className="flex  text-6xl justify-center	font-thin	 tracking-wide	 	 ">
                    <div className="text-center	" style={{color:"white" , width:"60%" }}>
                        <Typography variant="p">Commandez des vrais plats faits maison à coté de chez vous</Typography>
                    </div>
                </div>
                <div> 
                    <div style={{color:"white" }}  className="flex justify-center mt-4   text-1xl tracking-wide		 ">
                        <Typography variant="p">Devenez Koolfeeder et gagnez de l'argent en partageant vos repas faits maison</Typography>
                    </div>
                </div>

                <div className="flex justify-center mt-5  ">
                                <div   className="absolute  mt-4 justify-center ml-590"> 
                                <SearchIcon style={{fontSize:"40px" }}/>
                                </div>
                    <div  className="flex  ">
                            <input  placeholder="Your Addres or postal code" className="font-bold pl-10	p-6 placeholder-gray-500 rounded-full mt-2" style={{width:"650px" , height:"52px"}}/>
                            
                    </div>
                </div>
           </div>
           {/* Number */} 
         
           
           <div  className={`text-white flex justify-center mb-10 pl-4 m backgroundImage ${TogelHover ? "mt-160" : "mt-220"}`} >
                     <div className="mr-2 p-4 ml-6 f-19">
                            <Typography className="text-2xl font-bold		"  variant="p">10000 </Typography>
                            <Typography className="pl-4 pr-8  fw-400	borderls" variant="p">koolfeeder inscrits </Typography>
                        </div>

                        <div className="mr-2 p-4 f-19">
                            <Typography className="text-2xl font-bold		" variant="p">12000 </Typography>
                            <Typography  className="pl-4 pr-8 fw-400	borderls" variant="p">repas variés </Typography>
                        </div>

                        <div className="mr-2 p-4  f-19">
                            <Typography className="text-2xl font-bold		" variant="p">2000 </Typography>
                            <Typography  className="pl-4  pr-4  fw-400	" variant="p">plats livrés </Typography>
                    </div>
            </div> 
            </div>
            </div>
        </div>
    )
}

export default Main01
