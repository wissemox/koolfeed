import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import Main01 from "./Main01";
import Carousel from "./Carousel";
import TextCatgories from "./TextCatgories";
import Préférences from "./Préférences ";
import TypedeplayText from "./TypedeplayText";
import Typesdeplats from "./Typesdeplats";
import Main02 from "./Main02";
import Slider from "./Slider";
function Home() {
  const [Scrol, setScroll] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Scrol02, setScrol02] = useState(false);
  const [Number01, setNumber01] = useState(0);
  const [TestOBject, setTestOBJect] = useState([
    {
      Name: "Test",
      Address: "Resqd",
    },
    {
      Name: "Test01",
      Address: "Resqd",
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
  const Test55 = () => {
    setLoading(true);
  };
  setTimeout(Test55, 2000);

  return (
    <div>
      {!Loading ? (
        <div
          className="flex justify-center backgroundImage04	f-50"
          style={{ backgroundColor: "#FC6539", width: "100%", height: "100%" }}
        >
          {/* Animation when referesh */}
          <CircularProgress
            style={{
              color: "white",
              marginTop: "340px",
              marginBottom: "340px",
            }}
          />
        </div>
      ) : (
        <div>
          {/* <Main01 Scrol02={Scrol02} Scrol={Scrol}/> */}
          <Main02 Scrol={Scrol} />
          {/* Préférences   */}
          <Préférences />
          {/* TextCatgories */}
          <TextCatgories />

          <Carousel />
          <TypedeplayText />
          <Typesdeplats />
        </div>
      )}
      {/* Navbarhere */}
    </div>
  );
}

export default Home;
