import React from 'react'

const TextCatgories = () => {
    return (
        <div>
            {/* Lign  */}
        <div className="flex justify-center	">
            <div>
                 <img className="w-50" src="ligne03.svg"/> 
            </div>
        </div>

        <div style={{height:"60px"}} className="flex justify-center mt-6	">
            <div>
                <div className="text-center f-45  	leading-10			">
                    <p  className="font-medium font-semibold pb-4		" style={{color:"#222222" }}>Nos catégories </p>
                </div>
                <div style={{fontSize:"26px"  , fontWeight:"400"}} className="text-center  	tracking-wide		font-light	">
                    <p>Savourez des plats faits maison à travers le monde</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TextCatgories
