import React from 'react'

const Préférences  = ({el , i }) => {
    return (
        <div>
            {/* Web */}
        <div className="displaynonePrefesiona2 mr-10" >
            <div className="rounded-full h-60 ml-30px mr-30 pt-1"  style={{  backgroundColor:i==0 && "#F0F0F0"}}>
                {/* There is some peroblame so i do every one there own style */}
                   <img  style={{width:i==1 && '50px' || i==4 && "50px" || i==6 && "60px" ||i==10 && "60px" || "35px" , marginLeft:i==1&&"6px" || i==4 && "5px" || i==6 && "4px" || i==10 &&"4px"  ||"12px"  ,marginTop:i==1&&"5px"  || i==10 &&"5px" ||"11px" , }} src={el.Image}/>
            </div>

           

            <div  className=" font-semibold text-center mt-2 w-120">
                  <p className="fontsizeRespsive">{el.Name}</p>
            </div>
        </div>

        {/* resposive Mobile Carousel */}

        <div className="displaynoneResposiveProfesional mr-10" >
            <div className="rounded-full h-60 ml-30px mr-30 pt-1"  style={{ paddingTop:"1px"  }}>
                   <img  style={{width: i==0 && "18px"||i==1 && '25px' ||i==2 && '20px'|| i==3&&"20px" || i==4 && "35px" || i==6 && "35px" ||i==9 && "15px" ||i==10 && "25px" || "20px" , marginLeft: i==0 && "20px"||i==1&&"18px" ||i==2 && "20px" ||i==3 && "15px" || i==4 && "15px" || i==6 && "10px" ||i==7 && "20px" || i==8&&"20px" || i==9&&"20px" || i==10 &&"15px"  ||"20px"  ,marginTop: i==0&&"40px"||i==1&&"30px" ||i==2 && "30px" ||i==3&&"35px" ||i==8 && "42px" ||i==4&&"40px" ||i==5 &&"40px" ||i==6 && "35px" ||i==9&&"40px" || i==10 &&"34px" ||"32px" , }} src={el.Image}/>
            </div>

           

            <div  className=" font-semibold text-center mt-2 w-120">
                  <p className="fontsizeRespsive">{el.Name}</p>
            </div>
        </div>

        </div>
    )
}

export default Préférences 
