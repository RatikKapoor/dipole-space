import { Close, FavoriteRounded, Star } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import React from "react";

export const UserReact: React.FC = () => {
  return (
    <>
      <Fab color="secondary">
        <Close />
      </Fab>
      <Fab color="primary">
        <FavoriteRounded />
      </Fab>
      <Fab color="secondary">
        <Star />
      </Fab>
    </>
  );
};
