import React from 'react'

const Rate02 = ({Rate }) => {
    const stars = (x)=>{
        let starsArray =[]
        for(let i=1 ; i<=5 ;i++){
            if(i<=x){
                starsArray.push(<span className="fontsizeRate20ProducctDatied" style={{ paddingRight:"5px" , color:"#FA663C"}}>★</span>);
            }else{
                starsArray.push(<span className="fontsizeRate20ProducctDatied" style={{paddingRight:"5px" }}>☆</span>)
            }
        }
        return starsArray;
    }

    return (
        <div>
            {stars(Rate)}
        </div>
    )
}

export default Rate02
