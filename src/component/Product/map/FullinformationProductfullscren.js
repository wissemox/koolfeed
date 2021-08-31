import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const FullinformationProductfullscren = ({ el, Number02, setNumber02 }) => {
  if (!el.image[Number02]) {
    setNumber02(0);
  }
  if (Number02 < 0) {
    setNumber02(0);
  }
  return (
    <div className="flex ml-40ResposiveFullProductDatied mt-11">
      {/* style={{transform: [{ rotate: '180deg' }]}}
       */}

      <NavigateNextIcon
      className="marginTopResposiveNavigteNextIcon"
        style={{
          transform: "rotate(180deg)",
         
          fontSize: "60px",
        }}
        onClick={() => setNumber02(Number02--)}
      ></NavigateNextIcon>
      <img
        className="widhtHeaight590RepsoisveFullproductDatied"
        src={process.env.PUBLIC_URL + `/${el.image[Number02]}`}
      />
      {/* {el.image[3] ? <p>Jawk bahi</p> : <p>JaWKMOCHBAHI</p>} */}
      <NavigateNextIcon
      className="marginTopResposiveNavigteNextIcon"
        style={{ fontSize: "60px"}}
        onClick={() => setNumber02(Number02++)}
      ></NavigateNextIcon>
    </div>
  );
};

export default FullinformationProductfullscren;
