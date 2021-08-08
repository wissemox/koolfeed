import React from 'react'

const Typesdeplatsmap = ({el}) => {
    return (
        <div style={{marginRight:"80px"}}>
            <div>
               <img style={{width:"170px"  , marginTop:"50px" }} src={el.Image}/>
            </div>
            <div className="text-center pt-4 text-xl font-semibold			">
              <p>{el.Name}</p>
            </div>
        </div>
    )
}

export default Typesdeplatsmap
