import React from "react";
import InputDeesing from "./InputDeesing";
import { Link } from "react-router-dom";
const AddressBar = ({ match, ReserchBar, setReserchBar }) => {
  return (
    <div
      className="p-4 pl-36Resposive flex BackgroundColorF4F4F4  widhtRespsivePresntage01"
      style={{ width: "100%", marginTop: "1px" }}
    >
      <div className="displayNoneTextReposive  marginLeftReposive01Address widht50presentRepsoive marginLeaftResposive50prestage">
        <p style={{ fontSize: "17px" }} className="font-medium ">
          {match}
        </p>
        <Link to="/">
          {" "}
          <p className="textColor-orange">Change address</p>{" "}
        </Link>
      </div>
      <div className="flex justify-end-CenterResposive600 ">
        <div>
          <InputDeesing ReserchBar={ReserchBar} setReserchBar={setReserchBar} />
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
