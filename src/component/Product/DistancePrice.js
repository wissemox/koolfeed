import React, { useState } from "react";
import Slider from "../Slider";
const DistancePrice = ({ Number01, setNumber01 }) => {
  const [Typedeplats, setTypedeplats] = useState(false);
  const [Typedeplay02, setTypedeplats02] = useState(false);
  return (
    <div>
      <div className="border-top-bottm ml-36 mt-4 pt-4 pb-4  ">
        <div className="flex" onClick={() => setTypedeplats(!Typedeplats)}>
          <div style={{ width: "90%" }}>
            <p className="font-medium" style={{ color: "#444444" }}>
              price
            </p>
          </div>
          <div>
            <div>{Typedeplats ? <p>v</p> : <p>^</p>}</div>
          </div>
        </div>
        {Typedeplats && (
          <div className="mt-4 TestANimationclick01">
            <Slider Number01={Number01} setNumber01={setNumber01} />

            {console.log(Number01)}
          </div>
        )}
      </div>
      <div className="ml-36 mt-8 pt-4  border-top-bottm ml-36 mt-1 pb-4">
        <div className="flex" onClick={() => setTypedeplats02(!Typedeplay02)}>
          <div style={{ width: "90%" }}>
            <p className="font-medium" style={{ color: "#444444" }}>
              Desitance
            </p>
          </div>
          <div>{Typedeplay02 ? <p>v</p> : <p>^</p>}</div>
        </div>

        {Typedeplay02 && (
          <div className="mt-4 TestANimationclick01">
            <Slider Number01={Number01} setNumber01={setNumber01} />

            {console.log(Number01)}
          </div>
        )}
      </div>
    </div>
  );
};

export default DistancePrice;
