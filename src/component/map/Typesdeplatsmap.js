import React from 'react'

const Typesdeplatsmap = ({el}) => {
    return (
        <div >
            <div className="ml-20Resposive" >
               <img className="w-170 h-170" style={{  marginTop:"50px" }} src={el.Image}/>
            </div>
            <div   className="w-170Resposive text-center marginLeftResposiveTextType   pt-4 text-xlResposive font-semibold			">
              <p>{el.Name}</p>
            </div>
        </div>
    )
}

export default Typesdeplatsmap
