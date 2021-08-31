import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import {Link} from 'react-router-dom'
const FullinformationProductMap = ({
  el,
  Rate02,
  setOpenModal,
  setNumber,
  Number,
  setNumber02,
}) => {
  const [Number01, setNumber01] = useState(el.image[0]);
  const NumerSterImage = (ImageName, ImageNumber) => {
    setNumber01(ImageName);
    setNumber02(ImageNumber);
  };
  if (Number < 0) {
    setNumber(0);
  }
  return (
    <div className="flexDisplayBlockFullProductDatied marginLeaftResposivePHone mt-20 mb-20">
      <div className="widhtPresntage45">
        <img
          onClick={() => setOpenModal(true)}
          className="Heaight590 widhtImageProductDaited"
          src={process.env.PUBLIC_URL + `/${Number01}`}
        />
      </div>

      <div className="pl-10 widhtpresntageProductDatied 	">
        {/* Text here */}
        <p className="font-medium text-3xl ">{el.Name}</p>
        <p className="pt-1 text-xl	 mt-2" style={{ color: "#BAC34E" }}>
          ${el.price}
        </p>
        <div className="mt-1 flex">
          <Rate02 Rate={el.Rate} />
          <p className="ml-4 Fontsize14productDatied text-lg">
            ( Customer Review )
          </p>
        </div>

        <div className="mt-8 leading-loose	 text-base">
          <p
            className="fontSizeProductDatied WidthProductDatiedDescraption"
            style={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consecte adipisicin elit, sed do eiusmod
            tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore.
          </p>
        </div>

        <div  className="flex mt-6 widht100PresntageAddcart">
          <div style={{ backgroundColor: "#F6F6F6" }} className="p-3 flex">
            <button
              className="pr-3 font-bold		"
              onClick={() => setNumber(Number - 1)}
              type="button"
            >
              <p>-</p>
            </button>
            <p className="NumberFonsize">{Number}</p>
            <button
              className="pl-3 font-bold	"
              onClick={() => setNumber(Number + 1)}
              type="button"
            >
              +
            </button>
          </div>
       
          <div
            className="text-white fontSizeAddCart text-center	pt-3 ml-2"
            style={{ backgroundColor: "#FA663C", width: "150px" }}
          >
               <Link to="/Panier">
            <p>ADD TO CART</p>
            </Link>
          </div>

          <div
            className="ml-2 pt-3 flex justify-center	 widhtPrestageDatited10pr"
            style={{ backgroundColor: "#F6F6F6"  }}
          >
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="mt-4" style={{ color: "#505050" }}>
          <p>Categories : {el.Catgories}</p>
        </div>
        <div className="mt-4" style={{ color: "#505050" }}>
          <p>Address : {el.Address}</p>
        </div>
        <div className="flex font-norma  mt-4	">
          <p className="pt-1">Share : </p>
          <div className="mr-2 ml-2 ">
            <TwitterIcon style={{ fontSize: "15px" }} />
          </div>
          <div className="mr-2 ml-2 ">
            <FacebookIcon style={{ fontSize: "15px" }} />
          </div>
        </div>
        <div className="flex mt-4">
          {/* <img onClick={()=>setNumber01(0)}  style={{width:"120px" , height:"120px" , marginRight:"30px"}} src={process.env.PUBLIC_URL + `/${el.image[0]}`} /> 
        <img onClick={()=>setNumber01(1)} style={{width:"120px" , height:"120px" , marginRight:"30px"}} src={process.env.PUBLIC_URL + `/${el.image[1]}`} /> 
        <img onClick={()=>setNumber01(2)}  style={{width:"120px" , height:"120px",marginRight:"30px"}} src={process.env.PUBLIC_URL + `/${el.image[2]}`} /> 
        <img onClick={()=>setNumber01(3)} style={{width:"120px" , height:"120px",marginRight:"30px"}} src={process.env.PUBLIC_URL + `/${el.image[3]}`} />  */}
          {el.image.map((el, i) => (
            <img
              onClick={() => NumerSterImage(el, i)}
              className="DaitedProductResposiveWithHeaight MarginRightResposivePrestage30"
              
              src={process.env.PUBLIC_URL + `/${el}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullinformationProductMap;
