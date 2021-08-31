import React,{useState} from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const PanierMap = ({el}) => {
    const [Number, setNumber] = useState(0);
    if (Number < 0) {
        setNumber(0);
      }
    return (
        <div style={{border:"solid 1px #D2D4D6" , width:"95%"}} className="flex text-center" className="flex">
            <div className="flex justify-center	pt-20 pb-4" style={{width:"11.6%"  ,borderRight:"solid 1px #DEE2E6"}}>
            <HighlightOffIcon />
            </div>
            <div className="p-6" style={{width:"19.2%"   ,borderRight:"solid 1px #DEE2E6"}} >
                <img style={{height:"140px" , width:"95%"}} src={el.Image}/>
            </div>
            <div className="p-4 text-center	text-xl pt-20" style={{width:"28.7%"  ,borderRight:"solid 1px #DEE2E6"}}>
                <p>{el.Name}</p>
            </div>

            <div className="p-4 text-xl font-normal text-center pt-20" style={{width:"14.5%"  ,borderRight:"solid 1px #DEE2E6"}}>
                <p>${el.Price}</p>
            </div>

          <div style={{  width:"14.5%"  ,borderRight:"solid 1px #DEE2E6"  }} className="flex">
              <div className="flex m-12 mt-16" style={{backgroundColor: "#F6F6F6" , height:"50px"}}>
            <button
              className="pr-3 ml-2 font-bold 		"
              onClick={() => setNumber(Number - 1)}
              type="button"
            >
              <p>-</p>
            </button>
            <p className="NumberFonsize mt-3">{Number}</p>
            <button
              className="pl-3 font-bold mr-2	"
              onClick={() => setNumber(Number + 1)}
              type="button"
            >
              +
            </button>
            </div>

            <div style={{marginTop:"70px"}} className="ml-12  text-2xl	">
                <div >
                   <p>${el.Price*Number}</p>
                </div>
            </div>
          </div>
          
        </div>
    )
}

export default PanierMap
