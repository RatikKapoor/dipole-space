import React, { useEffect, useState } from "react";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

import { NavigateNext } from "@mui/icons-material";
import Fab from "@mui/material/Fab";

import { NavigationBar } from "../components/common/NavigationBar";
import { Matching } from "./Matching";
import { UserReact } from "../components/common/UserReact";
import { useHistory } from "react-router-dom";

import { useFindHobbiesQuery } from "../generated-types";

export const StartMatching: React.FC = () => {
  const [toggleMatching, setToggleMatching] = useState<boolean>(false);
  const [potentialMatches, setPotentialMatches] = useState<any>(null);
  const user = useSelector((state: RootState) => state.user.user);
  const findHobbiesQuery = useFindHobbiesQuery();
  const history = useHistory();

  useEffect(() => {
    console.log(user);

    createData();
  }, [, findHobbiesQuery]);

  const createData = () => {
    const userHobbies: any = [];
    user?.hobbies?.forEach((hobbyData) => {
      userHobbies.push(hobbyData?.type);
    });

    const hobbies = findHobbiesQuery?.data?.findHobbies.items;

    //Find matched Hobbies
    const matchedHobbies: any = [];
    hobbies?.forEach((hobbyData: any) => {
      if (hobbyData?.users._id !== user?._id) {
        for (const userHobby of userHobbies) {
          if (userHobby === hobbyData?.type) {
            matchedHobbies.push(hobbyData);
          }
        }
      }
    });

    //Setting users from matched hobbies
    const matchedHobbiesUsers: any = [];
    matchedHobbies?.forEach((hobbies: any) => {
      //TODO: CHECK IF THEY HAVE ALREADY GONE THROUGH THE LIST AKA REJECTED AND LIKED LIST ON MONGO
      matchedHobbiesUsers.push(hobbies.users);
    });
    setPotentialMatches(matchedHobbiesUsers);
  };

  const setDynamicDislike = () => {
    console.log("Dislike User");
  };

  const setDynamicLike = () => {
    console.log("Liked User");
    history.push("/chat");
    setPotentialMatches(potentialMatches.pop());
  };

  return (
    <>
      {" "}
      {!toggleMatching ? (
        <div>
          <div>Start Matching</div>
          <Fab
            color="secondary"
            onClick={() => {
              setToggleMatching(true);
            }}
          >
            <NavigateNext />
          </Fab>
          <NavigationBar />
        </div>
      ) : (
        <>
          {potentialMatches[0] !== null ? (
            <Matching
              bio={potentialMatches[0].bio}
              age={potentialMatches[0].age}
              name={potentialMatches[0].name}
              gender={potentialMatches[0].gender}
            />
          ) : null}

          <UserReact
            setLike={() => {
              setDynamicLike();
            }}
            setDislike={() => {
              setDynamicDislike();
            }}
          />
        </>
      )}
    </>
  );
};
