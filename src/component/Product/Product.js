import React, { useState } from "react";
import Navbar from "./Navbar";
import AddressBar from "./AddressBar";
import Filter from "./Filter";
import Carsoul from "./Carousel02";
import ProductMap from "./map/ProductMap";
import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Button,
  Input,
} from "@material-ui/core";
import { Parallax } from "react-parallax";
import AddressRespsive from "./AddresBarPhoneResposive";
const Product = ({ match }) => {
  const [FilterMenuTogel, setFilterMenuTogel] = useState(false);

  const [ReserchBar, setReserchBar] = useState("");
  const [TestTrue, TestTreu] = useState("Entre");
  const [TestTrue01, TestTreu01] = useState(true);
  const [Typedeplats01, setTypesdeplats01] = useState("");
  const [Préférences03, setPréférences03] = useState("");
  const [Entree, setEntree] = useState();
  const [plat, setplat] = useState();
  const [Dessert, setDessert] = useState();
  // Boissons et cocktails
  const [Boissonsetcocktails, SetBoissonsetcocktails] = useState();
  // Accompagnement
  const [Accompagnement, SetAccompagnement] = useState();
  const [Number01, setNumber01] = useState(0);
  const [Catgories, setCatgories] = useState();
  const [Scrol, setScroll] = useState(false);
  const [Rate, setRate] = useState(0);
  const [ProductAll, setProductAll] = useState([
    {
      id:0,
      Catgories: "Japonais",
      Préférences: "Sushi",
      Address: "azdadz",
      Name: "sushi",
      image: "sochi.jpg",
      TypesDeplat: "Plat",
      Rate: 5,
      price: 50,
    },
    {
      id:1,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "ramen",
      image: "ramen.jpg",
      TypesDeplat: "Plat",
      Rate: 3,
      price: 60,
    },
    {
      id:2,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "mochi ice cream",
      image: "MoshiIceCream.jpg",
      TypesDeplat: "Dessert",
      Rate: 4,
      price: 60,
    },

    {
      id:3,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "mochi ice cream",
      image: "MoshiIceCream.jpg",
      TypesDeplat: "Dessert",
      Rate: 5,
      price: 70,
    },
    {
      id:4,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "japanese ginger pork",
      image: "japanesegingerpork.jpg",
      TypesDeplat: "Entrée",
      Rate: 5,
      price: 70,
    },
    // japanesegingerpork01
    {
      id:5,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "japanese ginger pork",
      image: "japanesegingerpork01.jpg",
      TypesDeplat: "Entrée",
      Rate: 3,
      price: 70,
    },
    {
      id:6,
      Catgories: "Mexicain",
      Address: "azdadz",
      Name: "Chilaquiles",
      TypesDeplat: "Plat",
      image: "Chilaquiles.jpg",
      Rate: 2,
      price: 50,
    },
    {
      id:7,
      Catgories: "Italien",
      Address: "azdadz",
      Préférences: "Pizza",
      Name: "Pizza",
      image: "Pizaaimage.jpg",
      TypesDeplat: "Plat",
      Rate: 3,
      price: 50,
    },
    {
      id:8,
      Catgories: "Italien",
      Address: "azdadz",
      Préférences: "Pizza",
      Name: "Pizza",
      image: "Pizaaimage.jpg",
      TypesDeplat: "Plat",
      Rate: 5,
      price: 50,
    },
    {
      id:9,
      Catgories: "Américain",
      Address: "azdadz",
      Préférences: "Pizza",
      Name: "Pizza",
      image: "Pizaaimage.jpg",
      TypesDeplat: "Plat",
      Rate: 4,
      price: 50,
    },
  ]);
  const changeBackground = () => {
    if (window.scrollY == 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const TestFunction = () => {
    if (!TestTrue) {
      ProductAll.filter((el) => (el.Name = "Pizza"));
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    
    <div className="">
      {console.log(Catgories)}
      
      <Navbar
        Rate={Rate}
        setRate={setRate}
        Number01={Number01}
        setNumber01={setNumber01}
        Préférences03={Préférences03}
        setPréférences03={setPréférences03}
        setFilterMenuTogel={setFilterMenuTogel}
        FilterMenuTogel={FilterMenuTogel}
        setTypesdeplats01={setTypesdeplats01}
        ReserchBar={ReserchBar}
        setReserchBar={setReserchBar}
        Scrol={Scrol}
        match={match}
      />
      {/* Address and recherche bar */}
      <div className="DisplayNoneAddressRespsive ">
        <AddressRespsive
          match={match}
          setFilterMenuTogel={setFilterMenuTogel}
        />
      </div>
      <div className="flex  MaeginTop005">
        <div className="DisplayNoneResposiveFilter" style={{ width: "25%" }}>
          <Filter
            Entree={Entree}
            setEntree={setEntree}
            plat={plat}
            setplat={setplat}
            setDessert={setDessert}
            Dessert={Dessert}
            SetBoissonsetcocktails={SetBoissonsetcocktails}
            Boissonsetcocktails={Boissonsetcocktails}
            SetAccompagnement={SetAccompagnement}
            Accompagnement={Accompagnement}
            Number01={Number01}
            setNumber01={setNumber01}
            Typedeplats01={Typedeplats01}
            setTypesdeplats01={setTypesdeplats01}
            Préférences03={Préférences03}
            setPréférences03={setPréférences03}
            Rate={Rate}
            setRate={setRate}
          />
        </div>

        <div className="w-70Responisive ">
          <Carsoul Catgories={Catgories} setCatgories={setCatgories} />

          <div
            className="BackgroundimageFullimage03 ml-14ResposiveProdut wp-90Presntage heaightResposiveProductFreeDelivery"
            style={{ borderRadius: "20px" }}
          >
            <p className="text-2xlResponsive font-semibold  pl-4 pt-4 text-white		">
              Free Delivery for your first 14 days!
            </p>
            <p className=" pl-4 TextResponsive text-white	">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <div
            style={{ height: "15px" }}
            className="mt-6 text-2xl	mb-12 font-medium ml-14"
          >
            <p>Top Rated</p>
          </div>
          <div className="flex flex-wrap  mt-6 ml-6 ml-6Reposive2 mt-10	">
            {ProductAll.filter((el) => el.Address == match)
              .filter((el) =>
                el.Name.toLocaleLowerCase().includes(
                  ReserchBar.toLocaleLowerCase().trim()
                )
              )
              .filter((el) => (Number01 ? el.price == Number01 : el.price))
              .filter((el) =>
                Typedeplats01 ? el.TypesDeplat == Typedeplats01 : el.TypesDeplat
              )
              .filter((el) =>
                Catgories ? el.Catgories == Catgories : el.Catgories
              )
              .filter((el) =>
                Préférences03 ? el.Préférences == Préférences03 : el
              )
              .filter((el) => (Rate ? el.Rate == Rate : el))
              .map((el) => (
                <ProductMap el={el} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
