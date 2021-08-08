import React from 'react'
import Container from '@material-ui/core/Container';

const CarouselMap = ({el ,Cardcss}) => {
    return (
        
        <div>
        <div>
        <div style={{marginLeft:"250px",backgroundColor:"white" , marginTop:"40px", height:"40px" , width:"40px"}}   className=" absolute p-2  text-center opacity-70 font-semibold			  rounded-full  	" >
                    <p >{el.Note}</p>
                </div>
        </div>
               
                 
                <div style={{marginTop:"245px" ,marginLeft:"56px" , paddingLeft:"20px" }}   className="backgroundblackoverlay absolute text-2xl text-white p-2	font-semibold		">
                    <p>{el.Name}</p>
                    <div className="text-base">
                        <p>Avg price $50</p>
                    </div>
                </div>
         
              <div className="Cardcss m-10 p-4" style={{   width:"810px" ,borderRadius:"7px" }} >
                <img className="hoverTestanimationimage"  style={{height:"300px" , width:"250px", borderRadius:"7px"}} src={`${el.image}`}/>
        
             </div>
          
        </div>
      
    )
}

export default CarouselMap
