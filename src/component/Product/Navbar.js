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
const Navbar = ({
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

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        {/* Box here ALL navbar */}
        <Box className="shadow-sm   ">
          <div className={`flex margin `}>
            <div className="flex  w-6-12 ">
              {/* Flexendstart */}

              {/* <MenuIcon  onClick={()=>setFilterMenuTogel(!MenuTogel)} className="mt-6 ml-10 DisplayNoneMenuProduct" style={{color:"#504D48"}}/> */}
              <div className="ml-140Resposive   marginBottom20Resposive mt-10 mb-10">
                {/* Image */}
                <img
                  className="w-50Reposive50 "
                  src={process.env.PUBLIC_URL + "/logowithbackround.svg"}
                />
              </div>
            </div>
            {/* Text ACCUEIL NOTRE . . */}
            <div className="justify-end marginLeaftResposiveNavbar flex w-6-12">
              {/* Flexendhere */}

              {/* Text on togel */}
              <div className="DiplayNoneResposive600 m-7">
                <MenuIcon
                  onClick={() => setFilterMenuTogel02(!FilterMenuTogel02)}
                  style={{ color: "#504D48" }}
                />
              </div>
              <div className="pt-8 DisplayNooneReposive700TextProduct ml-40 font-semibold fontsizeResposive16 marginRight120Repsosive">
                {/* Text */}
                <Typography
                  style={{ color: "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Accueil
                </Typography>
                <Typography
                  style={{ color: "#504D48" }}
                  className="p-2 curser"
                  variant="p"
                >
                  Notre concept{" "}
                </Typography>

                <Typography
                  style={{ color: "#504D48" }}
                  className="p-2"
                  variant="p"
                >
                  Blog
                </Typography>
                <Typography
                  style={{ color: "#504D48" }}
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
      <div className="displayNone8000">
        <AddressBar
          match={match}
          setReserchBar={setReserchBar}
          ReserchBar={ReserchBar}
          setPréférences03={setPréférences03}
        />
      </div>
    </div>
  );
};

export default Navbar;
