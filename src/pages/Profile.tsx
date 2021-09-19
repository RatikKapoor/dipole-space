import React from "react";
import "../styles/profile.scss";
import { NavigationBar } from "../components/common/NavigationBar";

export const Profile: React.FC = () => {
    return (
        <>
            <div>
                User Profile
            </div>
            <NavigationBar />
        </>
    );
};
