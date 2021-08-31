import React from "react";
import Container from "@material-ui/core/Container";

const CarouselMap = ({ el, Cardcs, setCatgories, Catgories }) => {
  return (
    // Type de plat Carousel
    <div onClick={() => setCatgories(el.Name)}>
      <div></div>
      {console.log(Catgories)}

      <div className="pl-20 ml-10px mt-60RepsposiveProduct absolute text-2xl text-white p-2	font-semibold		">
        <p>{el.Name}</p>
      </div>
      {/* Image + animation */}
      <div
        className=" row-gap hoverimageAnimation heaightResposiveImageCarousel mt-11"
        style={{ borderRadius: "7px" }}
      >
        <img
          className="h-110 w-250"
          style={{ borderRadius: "7px" }}
          src={process.env.PUBLIC_URL + `/${el.image}`}
        />
      </div>
    </div>
  );
};

export default CarouselMap;
