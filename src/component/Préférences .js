import React, { useState } from "react";
import PrefrenceMap from "./map/PréférencesMap ";
import Container from "@material-ui/core/Container";
import Carousel from "react-elastic-carousel";

const Préférences = () => {
  const [True, TRuefalse] = useState(false);
  const [SliceNumber1, setSliceNumber1] = useState(0);
  const [SliceNumber2, setSliceNumber2] = useState(5);
  const SliceHangelChange01 = () => {
    setSliceNumber1(5);
    setSliceNumber2(11);
  };

  const [Name, setName] = useState("Halal");
  const breakPoints = [
    { width: 100, itemsToShow: 3 },

    { width: 300, itemsToShow: 4 },

    { width: 400, itemsToShow: 4 },

    { width: 550, itemsToShow: 4 },
    { width: 608, itemsToShow: 5 },
    { width: 900, itemsToShow: 8 },
    { width: 1600, itemsToShow: 10 },
  ];
  const [Prefernce01, setPrefernce] = useState([
    {
      Name: "Végétarien",
      Image: "Végétarien.png",
    },
    {
      Name: "Végan",
      Image: "Vegan.png",
    },
    {
      Name: "Burger",
      Image: "Burger.png",
    },
    {
      Name: "Pizza",
      Image: "Pizza.png",
    },
    {
      Name: "Pâtes",
      Image: "Pate6.png",
    },
    {
      Name: "Sushi ",
      Image: "Suchi.png",
    },
    {
      Name: "Repas variés",
      Image: "Vegance.png",
    },

    {
      Name: "Poisson et Fruit de mer",
      Image: "PoissonetFruit.png",
    },
    {
      Name: "Sans sucre",
      Image: "Scure.png",
      type: "adldd",
    },
    {
      Name: "Sans sel",
      Image: "Slat.png",
    },
    {
      Name: "Halal",
      Image: "Hala.png",
      type: "adldd",
    },
  ]);
  return (
    <div className="marginResposiveProfessional ">
      <Container>
        <div className="flex justify-center m-10 displaynone 	">
          {Prefernce01.map((el, i) => (
            <PrefrenceMap el={el} i={i} />
          ))}

          {/* {Prefernce01.filter((Objectd)=> True && Objectd.Name == "Sans sucre" || True && Objectd.type=="adldd" && Objectd.Name == "Halal"   ).map((el , i)=><p>{el.Name}</p>)} */}
        </div>
      </Container>
      <div className="displaynone01">
        <Container>
          <div style={{ width: "100%" }}>
            <Carousel breakPoints={breakPoints}>
              {Prefernce01.map((el, i) => (
                <PrefrenceMap el={el} i={i} />
              ))}
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Préférences;
