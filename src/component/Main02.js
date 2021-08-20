import React, { useState } from "react";
import { Parallax } from "react-parallax";
import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Button,
  Input,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const Main02 = ({ Scrol }) => {
  const [MenuTogel, SetMenuTogel] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FA663C",
      },
      secondary: {
        main: "#FA663C",
      },
    },
  });

  return (
    <Box>
      <Parallax bgImage={"Test01.jpg"} strength={60}>
        <Box className="heaightChnage">
          <AppBar style={{ backgroundColor: "transparent", boxShadow: "none" }}>
            {/* Box here ALL navbar */}
            <Box>
              <div className={`flex ${Scrol && "bg-colorOrange"} `}>
                <div className="flex justify-start w-6/12">
                  {/* Flexendstart */}
                  <div className="marginLeftResposiveNavbar mt-10 mb-10">
                    {/* Image */}

                    <img
                      className="imageResposiveLogo"
                      src="logobackground.svg"
                    />
                  </div>
                </div>
                {/* Text ACCUEIL NOTRE . . */}
                <div className="justify-end flex w-6/12">
                  {/* Flexendhere */}
                  <div className="DisplaynoneNavbarResposive01 text-white	 p-4">
                    <MenuIcon
                      style={{ fontSize: "100%" }}
                      onClick={() => SetMenuTogel(!MenuTogel)}
                    />
                  </div>
                  {/* Text on togel */}

                  <div className="pt-6 font-semibold fontsizeResposive DsiplayNoneResponiveNavbar  	marginRightResposiveNavbar	 	">
                    {/* Text */}
                    <Typography className="p-5 text-white	" variant="p">
                      Accueil
                    </Typography>
                    <Typography className="p-5 curser text-white	" variant="p">
                      Notre concept{" "}
                    </Typography>

                    <Typography className="p-5 text-white	 " variant="p">
                      Blog
                    </Typography>
                    <Typography className="p-5 text-white	" variant="p">
                      {" "}
                      Connexion
                    </Typography>
                  </div>
                </div>
              </div>
            </Box>
            {/* All Nabar ENd */}
          </AppBar>
          {/* Onclick in menu butto show this information */}
          {!MenuTogel && (
            <AppBar
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <Box className="TestANimationclick h-600 bg-white">
                <div className="flex m-2 ">
                  <div className="w-6/12">
                    <img
                      className="imageResposiveLogo"
                      src="logowithbackround.svg"
                    />
                  </div>

                  <div className="w-6/12 flex justify-end ">
                    <div className="mt-2 textColor-gris">
                      <MenuIcon onClick={() => SetMenuTogel(!MenuTogel)} />
                    </div>
                  </div>
                </div>

                <div className="mt-8  ">
                  <div className="p-4 MenuTogel">
                    {/* Accueil */}
                    <p className="f-20">Accueil</p>
                  </div>
                  <div className="p-4 MenuTogel">
                    {/* Notre concept */}
                    <p className="f-20">Notre concept </p>
                  </div>
                  <div className="p-4 MenuTogel">
                    {/* Blog */}
                    <p className="f-20">Blog</p>
                  </div>
                  {/* Connexion */}
                  <div className="p-4 MenuTogel">
                    <p className="f-20">Connexion</p>
                  </div>
                </div>
              </Box>
              {/* end here */}
            </AppBar>
          )}
          {/* Text  Commandez des vrais plats faits  */}
          <div className="ScaleAnimation  mt-200">
            {/* Text   Commandez des vrais plats faits maison */}
            <Container>
              <div className="flex  text-6xl justify-center	font-thin	 tracking-wide	 	 ">
                <div className="text-center text-white  wp-60">
                  <Typography variant="p">
                    Commandez des vrais plats faits maison à coté de chez vous
                  </Typography>
                </div>
              </div>
            </Container>
            {/* END Text   Commandez des vrais plats faits maison */}

            {/* Devenez Koolfeeder et gagnez de l'argent en partageant vos repas faits maison */}
            <Container>
              <div>
                <div className="flex justify-center mt-4 text-white text-center	 TextResposive02 tracking-wide		 ">
                  <Typography variant="p">
                    Devenez Koolfeeder et gagnez de l'argent en partageant vos
                    repas faits maison
                  </Typography>
                </div>
              </div>
            </Container>

            {/* END  Devenez Koolfeeder et gagnez de l'argent en partageant vos repas faits maison */}

            {/* Input Rechere Food */}
            <Container>
              <div className="flex justify-center mt-5  ">
                <div className="absolute  mt-4 justify-center ml-590 displaynoneimage">
                  <SearchIcon className="fontSized" />
                </div>
                <div className="flex SousCatgoryTest  displaynoneNavbarResposive03 ">
                  <input
                    style={{ height: "10px" }}
                    placeholder="Your Addres or postal code"
                    className="font-bold  pl-10	paddingResposive08  pb-4 rounded-full mt-2 widhtResposiveNavbar"
                  />
                </div>
                <div className="flex widthInput02 marginTopInput02 displanoneInput">
                  <MuiThemeProvider theme={theme}>
                    <Input style={{ fontSize: "12px" }} />
                  </MuiThemeProvider>
                  <SearchIcon style={{ fontSize: "80%" }} />
                </div>
              </div>
            </Container>

            {/* Input Rechere Food */}
          </div>
          {/* End here Commandez des vrais plats faits */}

          <div
            className={`text-white displaynoneRepsoive600 flex justify-center MatingTopNavbarRESPOVIE    backgroundImage `}
          >
            <div className="mr-2 p-4 ml-2 f-19 flex">
              <Typography
                className="TextfontSizeRespoive font-bold		"
                variant="p"
              >
                10000{" "}
              </Typography>
              <Typography
                className="pl-4 pr-8  fw-400 displaynoneResposive	borderls"
                variant="p"
              >
                koolfeeder inscrits{" "}
              </Typography>
              <img
                className="dispaynoneimageRespoive ml-4  mr-10"
                style={{ width: "24%", height: "13px" }}
                src="ProfileImage.png "
              />
            </div>

            <div className="mr-2 p-4 f-19 flex">
              <Typography
                className="TextfontSizeRespoive font-bold		"
                variant="p"
              >
                12000{" "}
              </Typography>
              <Typography
                className="pl-4 pr-8 fw-400 displaynoneResposive	borderls"
                variant="p"
              >
                repas variés{" "}
              </Typography>
              <img
                className="dispaynoneimageRespoive ml-4  mr-10"
                style={{ width: "24%", height: "14px" }}
                src="plats.png"
              />
            </div>

            <div className="mr-2 p-4  f-19 flex">
              <Typography
                className="TextfontSizeRespoive font-bold		"
                variant="p"
              >
                2000{" "}
              </Typography>
              <Typography
                className="pl-4  pr-4  fw-400 displaynoneResposive	"
                variant="p"
              >
                plats livrés{" "}
              </Typography>
              <img
                className="dispaynoneimageRespoive ml-4 "
                style={{ width: "20%", height: "10px", marginTop: "3px" }}
                src="pngaaa.com-1308977.png"
              />
            </div>
          </div>
        </Box>
      </Parallax>
    </Box>
  );
};

export default Main02;
