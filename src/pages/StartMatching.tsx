import React, { useEffect, useState } from "react";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

import { NavigateNext } from "@mui/icons-material";
import Fab from "@mui/material/Fab";

import { NavigationBar } from "../components/common/NavigationBar";
import { Matching } from "./Matching";
import { UserReact } from "../components/common/UserReact";

import {
    useFindUsersQuery,
    useFindHobbiesQuery,
    User as UserData,
    HobbyType,
} from "../generated-types";
import { selectUser } from "../features/user/userSlice";

export const StartMatching: React.FC = () => {
    const [toggleMatching, setToggleMatching] = useState<boolean>(false);
    const [potentialMatches, setPotentialMatches] = useState<UserData[] | null>(
        null
    );
    const [currentPotentialMatch, setCurrentPotentialMatch] = useState<
        UserData | undefined
    >();

    const user = useSelector(selectUser);
    const { data } = useFindUsersQuery();

    useEffect(() => {
        if (data === undefined) return;
        console.log("Got data", data);
        createData();
    }, [data?.findUsers.items]);

    useEffect(() => {
        console.log("Potential matches changes", potentialMatches)
        if (!potentialMatches) return
        if (potentialMatches && potentialMatches?.length > 0) {
            setCurrentPotentialMatch(potentialMatches[0])
        }
    }, [potentialMatches])

    const createData = () => {
        const userHobbies: HobbyType[] = [];
        user.user?.hobbies?.forEach((hobbyData) => {
            hobbyData && userHobbies.push(hobbyData?.type);
        });

        const allUsers = data?.findUsers.items;

        const temp = allUsers
            ?.filter((u) =>
                u?.hobbies?.filter((h) => h && userHobbies.includes(h.type))
            )
            .filter((u) => u?._id !== user.user?._id);
        console.log("Temp data", temp)
        setPotentialMatches(temp as UserData[]);
        console.log(potentialMatches);
    };

    const popPotentialMatchesAndUpdateCurrent = () => {
        const temp = potentialMatches?.filter(m => m._id !== currentPotentialMatch?._id)
        setPotentialMatches(temp ?? null)
    }

    const setDynamicDislike = () => {
        console.log("Dislike User", currentPotentialMatch);
        popPotentialMatchesAndUpdateCurrent()
    };

    const setDynamicLike = () => {
        console.log("Liked User", currentPotentialMatch);
        popPotentialMatchesAndUpdateCurrent()
    };

    return (
        <>
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
                    {currentPotentialMatch && (
                        <Matching
                            age={currentPotentialMatch.birthDate}
                            bio={currentPotentialMatch.bio ?? ""}
                            firstName={currentPotentialMatch.firstName}
                            gender={currentPotentialMatch.gender}
                            hobbies={currentPotentialMatch.hobbies}
                        />
                    )}
                    <UserReact
                        setLike={setDynamicLike}
                        setDislike={setDynamicDislike}
                    />
                </>
            )}
        </>
    );
};
