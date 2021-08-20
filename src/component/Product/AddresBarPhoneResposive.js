import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import {Link} from 'react-router-dom'
const AddresBarPhoneResposive = ({match , setFilterMenuTogel}) => {
  return (
    <div style={{backgroundColor:"#f4f4f4"}} className="flex mt-2 mb-2 pl-4 pt-4 pb-6">
      <div style={{ width: "40%" }} className="flex">
        <div>
          <p style={{ fontSize: "17px" }} className="font-medium">
            {match}
          </p>
          <Link to="/">
            {" "}
            <p className="textColor-orange">Change address</p>{" "}
          </Link>{" "}
        </div>
      </div>

      <div style={{ width: "50%" }} className="flex justify-end ">
        <div>
          <FilterListIcon onClick={()=>setFilterMenuTogel(true)}/>
        </div>
      </div>
    </div>
  );
};

export default AddresBarPhoneResposive;
