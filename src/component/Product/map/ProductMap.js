import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
const ProductMap = ({ el }) => {
  return (
    <div  className="ml-8 ">
      <Link to={`/FullinformationProduct/${el.Name}/${el.id}`}>
      <div>
      <div
        className="absolute rounded-3xl hoverimageAnimation01 widhtHeagithResposiveProduct"
        style={{
          backgroundColor: "black",

          opacity: "25%",
        }}
      
      > 
       </div>
      
      </div>
      </Link>
      <div className="absolute  rounded-3xl  flex">
        <div className="font-medium	">
          <p className="ml-4 p-1  mt-4  rounded-md bg-white	 f-12	">
            {el.Catgories}
          </p>
        </div>
        <div className=" mt-2 row-gap marginLeftIconProfileResposie">
          {/* ProfileImage */}
          <img
            className="ml-4 w-30"
            src={process.env.PUBLIC_URL + `/ProfileImage.png`}
          />
          <div className="font-medium text-white ml-3  f-12">
            <p>Ahmed</p>
          </div>
        </div>
      </div>

      <div className="absolute text-white mt-120 ml-20px ">
        <p className="font-semibold text-xl	">{el.Name}</p>
        <p className="font-normal opacity-80 leading-tight			">{el.Address}</p>
      </div>
      {/* <div className="absolute">
               <p>azd</p>
           </div> */}
      <div className="imagehover row-gap">
        <img
          className="imageResposiveLogo widhtHeagithResposiveProduct  rounded-3xl	"
          src={process.env.PUBLIC_URL + `/${el.image}`}
        />
      </div>

      <div
        style={{ color: "#444444" }}
        className="f-13 widhtPrestageResposiveRating flex mt-4 mb-8 ml-1"
      >
        <div className="flex">
          <CalendarTodayIcon style={{ fontSize: "18px" }} />
          <p className="pl-1">Takeaway</p>
        </div>
        <div className="flex ml-4">
          <AllInboxIcon style={{ fontSize: "18px" }} />
          <p className="pl-1">Delivery</p>
        </div>
        <div
          style={{ width: "50%" }}
          className="flex text-base justify-end flex"
        >
          <div className="mb-4">
            <StarIcon style={{ fontSize: "20px", color: "#FA663C" }} />
          </div>
          <div>
            <p className="pl-1  font-medium	pt-1	">{el.Rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMap;
