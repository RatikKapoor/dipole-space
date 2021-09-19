import { Close, FavoriteRounded, Star } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import React from "react";

export const UserReact: React.FC<any> = (props) => {
  const { setLike, setDislike } = props;

  return (
    <>
      <Fab color="secondary" onClick={setDislike}>
        <Close />
      </Fab>
      <Fab color="primary" onClick={setLike}>
        <FavoriteRounded />
      </Fab>
      <Fab color="secondary">
        <Star />
      </Fab>
    </>
  );
};
