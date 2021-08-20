import React from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  AppBar,
  Button,
} from "@material-ui/core";

const InputDeesing = ({ ReserchBar, setReserchBar }) => {
  return (
    <Box className="rounded-3xl" style={{ height: "43px" }}>
      <img
        className="absolute marginLeftResposive300ProductIcon "
        style={{ width: "30px", marginTop: "6px" }}
        src={process.env.PUBLIC_URL + "/Serche.svg"}
      />
      <input
        value={ReserchBar}
        onChange={(e) => setReserchBar(e.target.value)}
        className="rounded-3xl bordersolid Placholder WidhtResposiveInputProduct400"
        style={{ height: "43px" }}
        placeholder="Dishes,restaurants or cuisines"
      />
    </Box>
  );
};

export default InputDeesing;
