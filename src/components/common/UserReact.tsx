import { Close, FavoriteRounded, Star } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import React from "react";

interface UserReactProps {
  setDislike: () => void,
  setLike: () => void
}

export const UserReact: React.FC<UserReactProps> = (props: UserReactProps) => {
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
