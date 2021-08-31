import logo from "./logo.svg";
import "./App.css";
import "./css/widht.css";
import "./css/fontsize.css";
import "./css/margin.css";
import "./css/fontweight.css";
import Home from "./component/Home";
import "./css/Resposive/Home/CrasoelResposive.css";
// mt-220
import "./css/Resposive/Home/RespoiveVideNumber.css";
import "./css/Resposive/Home/NavbarResposive.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/Colorlogo.css";
import "./css/Heaight.css";
import "./css/Paddingleft.css";
import "./css/Resposive/Home/TextMainhomeResposive.css";
import "./css/Resposive/Home/Typedeplat.css";
import "./css/Resposive/Product/Navbar.css";
import "./css/Resposive/Product/Filter.css";
import './css/Resposive/Product/DaitedProduct.css'
import Product from "./component/Product/Product";
import InputDesign from "./component/Product/InputDeesing";
import FullinformationProduct from "./component/Product/FullinformationProduct"
import { Container } from "@material-ui/core";
import Panier from './component/Panier/Panier'
function App() {
  return (
    <div>
      {/* Home */}
      <BrowserRouter>
        {/* Panier */}
        <Route exact path="/Panier" render={() => <Panier />} />

        {/* Here vide and serche bar */}
        <Route exact path="/" render={() => <Home />} />
        {/*Product route here  */}
        {/* ProductHereDatiled */}
        <Route
          exact
          path="/FullinformationProduct/:token/:i0d"
          render={({ match  }) =><FullinformationProduct match={match.params} />}
        />
        <Route
          exact
          path="/Product/:token"
          render={({ match }) => (
            <div>
              <div
                className="flex mt-16 DisplayNoneResposiveChnag Address"
                style={{
                  width: "100%",
                  height: "90px",
                  position: "absolute",
                  backgroundColor: "#F4F4F4",
                }}
              >
                <div className="flex mt-4 marginLeaftAddresResposive ">
                  <div className="">
                    <p>{match.params.token}</p>
                    <div style={{ fontSize: "17px" }} className="font-medium ">
                      <p className="textColor-orange">Chnage address</p>
                    </div>
                  </div>
                  <div className="marginLeaftInputAddress">
                    <InputDesign />
                  </div>
                </div>
              </div>

              <div className="Container02">
                <Product match={match.params.token} />
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
