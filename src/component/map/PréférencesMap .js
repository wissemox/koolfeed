import React from 'react'

const Préférences  = ({el , i }) => {
    return (
        <div style={{marginRight:"10px"}}>
            <div className="rounded-full"  style={{ height:"60px", marginLeft:"30px", marginRight:"30px",paddingTop:"1px"  , backgroundColor:i==0 && "#F0F0F0"}}>
                   <img  style={{width:i==1 && '50px' || i==4 && "50px" || i==6 && "60px" ||i==10 && "60px" || "35px" , marginLeft:i==1&&"6px" || i==4 && "5px" || i==6 && "4px" || i==10 &&"4px"  ||"12px"  ,marginTop:i==1&&"5px"  || i==10 &&"5px" ||"11px" , }} src={el.Image}/>
            </div>
            <div style={{width:"120px"}} className=" font-semibold text-center mt-2">
                  <p>{el.Name}</p>
            </div>
        </div>
    )
}

export default Préférences 
