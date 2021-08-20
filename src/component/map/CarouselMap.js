import React from 'react'
import Container from '@material-ui/core/Container';

const CarouselMap = ({el ,Cardcss}) => {
    return (
        
        <div className="heaightResposive">
        <div>
        <div style={{backgroundColor:"white" , marginTop:"20px", height:"40px" , width:"40px"}}   className=" absolute p-2  text-center opacity-70 font-semibold	marginLeaftRespsoive		  rounded-full  	" >
                    <p >{el.Note}</p>
                </div>
        </div>
               
                 
                <div style={{ marginLeft:"40px" , paddingLeft:"20px" }}   className="backgroundblackoverlay absolute text-2xl text-white p-2	font-semibold	 marginTop250ResposiveCarousel	">
                    <p>{el.Name}</p>
                    <div className="text-base">
                        <p>Avg price $50</p>
                    </div>
                </div>
         
              <div className="ml-10 mt-14 mb-14 hoverimageAnimation " style={{   height:"300px" , width:"250px",borderRadius:"7px" }} >
                <img className="HeaightWidht widhtheightResposive"  style={{   borderRadius:"7px"}} src={`${el.image}`}/>
        
             </div>
          
        </div>
      
    )
}

export default CarouselMap
