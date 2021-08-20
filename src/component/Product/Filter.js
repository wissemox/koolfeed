import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import DistancePrice from "./DistancePrice";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Rate0 from "../Function/Rate0";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Input,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Filter = ({
  Entree,
  setEntree,
  plat,
  setplat,
  setDessert,
  Dessert,
  SetBoissonsetcocktails,
  Boissonsetcocktails,
  SetAccompagnement,
  Accompagnement,
  setNumber01,
  Number01,
  Typedeplats01,
  setTypesdeplats01,
  Préférences03,
  setPréférences03,
  Rate,
  setRate,
}) => {
  const [Typedeplats, setTypedeplats] = useState(false);
  const [Préférences01, setPréférences] = useState(false);
  const [RateTrue, setRatetrue] = useState(false);
  const [Delivery, setDelivery] = useState("Delivery");
  const [Number, setNumber] = useState(0);
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setTypesdeplats01(event.target.value);
  };
  const handleChange01 = (event) => {
    setPréférences03(event.target.value);
  };
  const handleChange02 = (event) => {
    setDelivery(event.target.value);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  const classes = useStyles();

  return (
    <div style={{ marginTop: "20px" }} className="sticky top-5 ">
      {console.log(Préférences03)}
      <div style={{ marginLeft: "140px" }}>
        <div   style={{ color: "#565656" }}>
          <RadioGroup value={Delivery} onChange={handleChange02}>
            <MuiThemeProvider theme={theme}>
              <div>
                <FormControlLabel
                  value="Delivery"
                  control={<Radio color="secondary" />}
                  label="Delivery"
                />
              </div>
              <FormControlLabel
                value="Take away"
                control={<Radio color="secondary" />}
                label="Take away"
              />
            </MuiThemeProvider>
          </RadioGroup>
        </div>
      </div>
      <p>{Préférences03}</p>
      <div className="border-top-bottm ml-36 mt-4 pt-4 pb-4  	">
        {console.log(Typedeplats)}

        <div className="flex" onClick={() => setTypedeplats(!Typedeplats)}>
          <div style={{ width: "90%" }}>
            <p className="font-medium" style={{ color: "#444444" }}>
              Types de plats
            </p>
          </div>
          <div>
            <div>{Typedeplats ? <p>v</p> : <p>^</p>}</div>
          </div>
        </div>
        {Typedeplats && (
          <div
            style={{ color: "#565656" }}
            className="TestANimationclick01 mt-4"
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={Typedeplats01}
              onChange={handleChange}
            >
              <MuiThemeProvider theme={theme}>
                <FormControlLabel
                  value=""
                  control={<Radio color="secondary" />}
                  label="All"
                />

                <FormControlLabel
                  value="Entrée"
                  control={<Radio color="secondary" />}
                  label="Entrée"
                />
                <FormControlLabel
                  value="Plat"
                  control={<Radio />}
                  label="Plat"
                />
                <FormControlLabel
                  value="Dessert"
                  control={<Radio />}
                  label="Dessert"
                />
                <FormControlLabel
                  value="Boissonsetcocktails"
                  control={<Radio />}
                  label="Boissons et cocktails"
                />
                <FormControlLabel
                  value="Accompagnement"
                  control={<Radio />}
                  label="Accompagnement"
                />
              </MuiThemeProvider>
            </RadioGroup>
          </div>
        )}
      </div>
      <div>
        <div className="border-top-bottm  ml-36 mt-4 pt-4 pb-4 ">
          <div onClick={() => setPréférences(!Préférences01)} className="flex">
            <div style={{ width: "90%" }}>
              <p className="font-medium" style={{ color: "#444444" }}>
                Préférences
              </p>
            </div>
            <div>
              {/* Préférences01 */}
              {Préférences01 ? <p>v</p> : <p>^</p>}
            </div>
          </div>
          {Préférences01 && (
            <div    style={{ color: "#565656" }} className="TestANimationclick01 mt-4">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={handleChange01}
                value={Préférences03}
              >
                <MuiThemeProvider theme={theme}>
                  <FormControlLabel
                    value=""
                    control={<Radio color="secondary" />}
                    label="all"
                  />
                  <FormControlLabel
                    value="Végétarien"
                    control={<Radio color="secondary" />}
                    label="Végétarien"
                  />
                  <FormControlLabel
                    value="Végan"
                    control={<Radio />}
                    label="Végan"
                  />
                  <FormControlLabel
                    value="Burger "
                    control={<Radio />}
                    label="Burger"
                  />
                  <FormControlLabel
                    value="Pizza"
                    control={<Radio />}
                    label="Pizza"
                  />
                  <FormControlLabel
                    value="Pâtes"
                    control={<Radio />}
                    label="Pâtes"
                  />
                  <FormControlLabel
                    value="Sushi"
                    control={<Radio />}
                    label="Sushi"
                  />
                  <FormControlLabel
                    value="Repas variés"
                    control={<Radio />}
                    label="Repas variés"
                  />
                  <FormControlLabel
                    value="Halal"
                    control={<Radio />}
                    label="Halal"
                  />
                  <FormControlLabel
                    value="Poisson et Fruit de mer"
                    control={<Radio />}
                    label="Poisson et Fruit de mer"
                  />
                  <FormControlLabel
                    value="Sans sucre"
                    control={<Radio />}
                    label="Sans sucre"
                  />
                  <FormControlLabel
                    value="Sans sel"
                    control={<Radio />}
                    label="Sans sel"
                  />
                </MuiThemeProvider>
              </RadioGroup>
            </div>
          )}
        </div>
        <div className="border-top-bottm  ml-36 mt-4 pt-4 pb-4">
          <div onClick={() => setRatetrue(!RateTrue)} className="flex">
            <div style={{ width: "90%" }}>
              <p className="font-medium" style={{ color: "#444444" }}>
                Rate
              </p>
            </div>
            <div>
              {/* Préférences01 */}
              {Préférences01 ? <p>v</p> : <p>^</p>}
            </div>
          </div>
          {RateTrue && (
            <div className="classes.root">
              <div style={{color:"#FA663C"}} className="TestANimationclick01 mt-4">
                <Rate0 Rate={Rate} setRate={setRate} />
                <div className="flex justify-center	">
                  <div>
                    <Button onClick={() => setRate(0)}>clear filter</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <DistancePrice setNumber01={setNumber01} Number01={Number01} />
    </div>
  );
};

export default Filter;
