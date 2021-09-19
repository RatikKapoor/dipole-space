import React from "react";
import landingIconTop from "../styles/vectors/landing-icon-top.svg";
import landingIconBottom from "../styles/vectors/landing-icon-bottom.svg";
import darkBlueWaves from "../styles/vectors/dark-blue-waves.svg";
import lightBlueWaves from "../styles/vectors/light-blue-waves.svg";
import { Icon } from "../components/common/Icon";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

export const Landing: React.FC = () => {
    const history = useHistory()
  return (
    <div className="landing-container">
      <div className="branding-container">
        <div className="dipole-row">
          <Icon size="80px" icon="dipole" />
          <h1 className="product-name">Dipole</h1>
        </div>
        <h3 className="tagline">Get Ready To Bond.</h3>
        <div className="auth-options">
            <Button
            fullWidth
            variant="contained"
            className="auth-button"
            onClick={() => history.push("/signup")}
            >Get Started</Button>
            <div className="login-text">
                <p>Already have an account? <span className="login-link" onClick={() => history.push("/login")}>Log in</span></p>
            </div>
        </div>
      </div>
      <img className="landing-icon top" src={landingIconTop} />
      <img className="landing-icon bottom" src={landingIconBottom} />
      <img className="landing-vector waves dark" src={darkBlueWaves} />
      <img className="landing-vector waves light" src={lightBlueWaves} />
    </div>
  );
};
