import { Close, FavoriteRounded, Star } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import React from "react";

interface UserReactProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLike: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDislike: any;
}

export const UserReact: React.FC<UserReactProps> = ({setLike, setDislike}: UserReactProps) => {

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
