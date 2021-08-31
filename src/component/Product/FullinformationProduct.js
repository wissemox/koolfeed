import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Button,
  Input,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddressBar from "./AddressBar";
import Filter from "./Filter";
import CancelIcon from "@material-ui/icons/Cancel";
import { Parallax } from "react-parallax";
import FullinformationProductMap from "./map/FullinformationProductMap";
import Rate02 from "../Function/Rate02";
import FullinformationProductFullscren from "./map/FullinformationProductfullscren";
const FullinformationProduct = ({
  Scrol,
  Rate,
  setRate,
  Number01,
  setNumber01,
  setPréférences03,
  Préférences03,
  setTypesdeplats01,
  match,
  ReserchBar,
  setReserchBar,
  FilterMenuTogel,
  setFilterMenuTogel,
}) => {
  const [MenuTogel, SetMenuTogel] = useState(false);
  const [FilterMenuTogel02, setFilterMenuTogel02] = useState(false);
  const [Scroll, setScroll] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);
  const [Number, setNumber] = useState(0);
  const [Number02, setNumber02] = useState(0);

  const [ProductAll, setProductAll] = useState([
    {
      id:0,
      Catgories: "Japonais",
      Préférences: "Sushi",
      Address: "azdadz",
      Name: "sushi",
      image: [
        "sochi.jpg",
        "ramen.jpg",
        "MoshiIceCream.jpg",
        "japanesegingerpork.jpg",
      ],
      TypesDeplat: "Plat",
      Rate: 5,
      price: 50,
    },
    {
      id:1,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "ramen",
      image: ["ramen.jpg", "ramen.jpg", "ramen.jpg"],
      TypesDeplat: "Plat",
      Rate: 3,
      price: 60,
    },
    {
      id:2,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "mochi ice cream",
      image:["MoshiIceCream.jpg",
      "MoshiIceCream.jpg","MoshiIceCream.jpg",
      "MoshiIceCream.jpg"],
      TypesDeplat: "Dessert",
      Rate: 4,
      price: 60,
    },

    {
      id:3,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "mochi ice cream",
      image: ["MoshiIceCream.jpg","MoshiIceCream.jpg","MoshiIceCream.jpg"],
      TypesDeplat: "Dessert",
      Rate: 5,
      price: 70,
    },
    {
      id:4,
      Catgories: "Japonais",
      Address: "azdadz",
      Name: "japanese ginger pork",
      image: ["japanesegingerpork.jpg","japanesegingerpork.jpg",
      "japanesegingerpork.jpg"],
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
      image: ["japanesegingerpork01.jpg","japanesegingerpork01.jpg",
      "japanesegingerpork01.jpg","japanesegingerpork01.jpg"],
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
      image: ["Chilaquiles.jpg","Chilaquiles.jpg"],
      Rate: 2,
      price: 50,
    },
    {
      id:7,
      Catgories: "Italien",
      Address: "azdadz",
      Préférences: "Pizza",
      Name: "Pizza",
      image: ["Pizaaimage.jpg","Pizaaimage.jpg","Pizaaimage.jpg","Pizaaimage.jpg"],
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
      image: ["Pizaaimage.jpg","Pizaaimage.jpg","Pizaaimage.jpg"],
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
      image: ["Pizaaimage.jpg","Pizaaimage.jpg","Pizaaimage.jpg"],
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
  // Scon change background navbar from white to orange
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: Scroll ? "#FA663C" : "white",
          boxShadow: "none",
        }}
      >
        {/* Modal Design here  */}
        {OpenModal && (
          <div>
            <div
              onClick={() => setOpenModal(false)}
              style={{
                backgroundColor: "#B5B5B5",
                opacity: "50%",
                position: "absolute",
                width: "100%",
                height: "100vh",
              }}
            ></div>
            {/* Map Product Datied  */}
            <Container>
              <div
                className="flex ml-36 marginTopResposiveFullscrenProductall"
                style={{ position: "absolute", justifyContent: "center" }}
              >
                {ProductAll.filter((el) => el.id == match.i0d).map((el) => (
                  <FullinformationProductFullscren
                    Number02={Number02}
                    setNumber02={setNumber02}
                    el={el}
                  />
                ))}
              </div>
            </Container>
          </div>
        )}
        {/* Modal here */}

        {/* Box here ALL navbar */}

        <Box className="shadow-sm   ">
          <div
            style={{
              maxWidth: "1500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className={`flex margin  `}
          >
            <div className="flex  w-6-12 ">
              {/* Flexendstart */}

              {/* <MenuIcon  onClick={()=>setFilterMenuTogel(!MenuTogel)} className="mt-6 ml-10 DisplayNoneMenuProduct" style={{color:"#504D48"}}/> */}
              <div className="ml-140Resposive   marginBottom20Resposive mt-10 mb-10">
                {/* Image */}
                {!Scroll && (
                  <img
                    className="w-50Reposive50 "
                    src={process.env.PUBLIC_URL + "/logowithbackround.svg"}
                  />
                )}

                {/* logobackground */}
                {Scroll && (
                  <img
                    className="w-50Reposive50 "
                    src={process.env.PUBLIC_URL + "/logobackground.svg"}
                  />
                )}
              </div>
            </div>
            {/* Text ACCUEIL NOTRE . . */}
            <div className="justify-end marginLeaftResposiveNavbar flex w-6-12">
              {/* Flexendhere */}

              {/* Text on togel */}
              <div className="DiplayNoneResposive600 m-7">
                <MenuIcon
                  onClick={() => setFilterMenuTogel02(!FilterMenuTogel02)}
                  style={{ color: Scroll ? "white" : "#504D48" }}
                />
              </div>
              <div className="pt-8 DisplayNooneReposive700TextProduct ml-40 font-semibold fontsizeResposive16 marginRight120Repsosive">
                {/* Text */}
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Accueil
                </Typography>
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2 curser"
                  variant="p"
                >
                  Notre concept{" "}
                </Typography>

                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Blog
                </Typography>
                <Typography
                  style={{ color: Scroll ? "white" : "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  {" "}
                  Connexion
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </AppBar>
      {FilterMenuTogel && (
        <AppBar position="fixed" style={{ backgroundColor: "transparent" }}>
          <div
            style={{ width: "400px" }}
            className="bg-white p-4 pr-4 Scrolloverflow "
          >
            <CancelIcon
              onClick={() => setFilterMenuTogel(false)}
              className="ml-32 mt-10"
              style={{ color: "#FA663C" }}
            />
            <Filter
              Rate={Rate}
              setRate={setRate}
              Préférences03={Préférences03}
              setPréférences03={setPréférences03}
              setTypesdeplats01={setTypesdeplats01}
              Number01={Number01}
              setNumber01={setNumber01}
            />
          </div>
        </AppBar>
      )}
      {FilterMenuTogel02 && (
        <div>
          <AppBar
            className="AnimaiionNavbarSticky"
            style={{
              backgroundColor: "white",
              height: "570px",
              color: "#504D48",
            }}
          >
            <div className="flex  AnimaiionNavbarSticky">
              <div className="pt-3 pr-8" style={{ width: "50%" }}>
                <div style={{ justifyContent: "flex-start" }}>
                  <img
                    className="w-50Reposive50 ml-4"
                    src={process.env.PUBLIC_URL + "/logowithbackround.svg"}
                  />
                </div>
              </div>

              <div
                style={{ justifyContent: "flex-end", width: "50%" }}
                className="flex pt-8 pr-8"
              >
                <div>
                  <MenuIcon
                    onClick={() => setFilterMenuTogel02(!FilterMenuTogel02)}
                    style={{ color: "#504D48" }}
                  />
                </div>
              </div>
            </div>
            <div className="m-4 f-20  ">
              <p className="p-4 MenuTogel">Accueil</p>
              <p className="p-4 MenuTogel">Notre consipation</p>
              <p className="p-4 MenuTogel ">Blog</p>
              <p className="p-4 MenuTogel ">Conxin</p>
            </div>
          </AppBar>
        </div>
      )}
      <div className="BackgroundimageFullimage008 ">
        <Container>
          <div
            className="flex text-5xl	PaddinngDatitedProductName 	justify-center"
          >
            <div>
              {console.log(match)}
              <p>{match.token}</p>
          
            </div>
          </div>
        </Container>
        {/* PararleexEffect  */}
      </div>

      {/* Product Here */}
      <Container>
        <div className="flex DisplayNoneinGalxyFold">
          {ProductAll.filter((el) => el.id == match.i0d).map((el, i) => (
            <FullinformationProductMap
              setNumber02={setNumber02}
              Number={Number}
              setNumber={setNumber}
              setOpenModal={setOpenModal}
              Rate02={Rate02}
              el={el}
              i={i}
            />
          ))}
        </div>
      </Container>


      {/* GalxyFold */}
      <div className=" DisplayOnlyIngalxyFold ">
          {ProductAll.filter((el) => el.id == match.i0d).map((el, i) => (
            <FullinformationProductMap
              setNumber02={setNumber02}
              Number={Number}
              setNumber={setNumber}
              setOpenModal={setOpenModal}
              Rate02={Rate02}
              el={el}
              i={i}
            />
          ))}
        </div>
    </div>
  );
};

export default FullinformationProduct;
