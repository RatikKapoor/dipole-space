import React from "react";
import "../styles/profile.scss";
import { NavigationBar } from "../components/common/NavigationBar";
import { Matching } from './Matching'
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

export const Profile: React.FC = () => {
    const { user } = useSelector(selectUser);

    return (
        <>
            {user &&
                <Matching
                    id={user._id}
                    age={user.birthDate}
                    firstName={user.firstName}
                    bio={user.bio ?? ""}
                    gender={user.gender}
                    hobbies={user.hobbies}
                    isOwnProfile={true}
                />
            }
            <NavigationBar />
        </>
    );
};
