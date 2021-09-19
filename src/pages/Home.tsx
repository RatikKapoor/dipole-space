import React from "react";
import { Icon } from "../components/common/Icon";
import { NavigationBar } from "../components/common/NavigationBar";
import SkiImage from "../styles/images/activity-ski.png"
import PaintImage from "../styles/images/activity-paint.png"
import FemaleAvatar from "../styles/images/female-avatar.png"
import MaleAvatar from "../styles/images/male-avatar.png"
import { ArrowForwardRounded, FavoriteBorderRounded } from "@mui/icons-material";
import HomeWavesTop from '../styles/vectors/home-waves-top.svg'

export const Home: React.FC = () => {
    return (
        <>
            <div className="home-container">
                <div className="activity-list">
                    <img src={HomeWavesTop} className="home-top-waves" />
                    <div className="activity-post">
                        <div className="post-header">
                            <img src={MaleAvatar} />
                            <h2>Carter</h2>
                            <div className="activity-metric">
                                <Icon size={"30px"} icon={"ski-icon"} />
                                <p>23 Km/Week</p>
                            </div>
                        </div>
                        <img src={SkiImage} />
                        <div className="activity-actions">
                            <FavoriteBorderRounded />
                            <ArrowForwardRounded />
                            <p className="activity-timeline"> 1 hour ago</p>
                        </div>
                        <div className="activity-description">
                            <p>Ski trip to Banff National Park! Going again this weekend. Join us! </p>
                        </div>
                    </div>
                    <div className="activity-post">
                        <div className="post-header">
                            <img src={FemaleAvatar} />
                            <h2>Don</h2>
                            <div className="activity-metric">
                                <Icon size={"30px"} icon={"ski-icon"} />
                                <p>25 paintings <br/> completed</p>
                            </div>
                        </div>
                        <img src={PaintImage} />
                        <div className="activity-actions">
                            <FavoriteBorderRounded />
                            <ArrowForwardRounded />
                            <p className="activity-timeline"> 1 hour ago</p>
                        </div>
                        <div className="activity-description">
                            <p>Join us for a creative weekend out in Victoria to channel your next Bob Ross!</p>
                        </div>
                    </div>
                </div>
            </div>
            <NavigationBar />
        </>
    );
};
