import { Link } from "react-router-dom";
import React from "react";
import { ArrowBack, ChevronRight } from "@mui/icons-material";

export const ChatWindow: React.FC = () => {
  return (
    <>
      <div className="page message-window">
        <div className="message-header">
          <div className="back-button">
            <Link to="/chat">
              <ArrowBack />
            </Link>
          </div>
          <h2>Carter</h2>
          <a className="profile-link">
            <span>View Profile</span>
            <ChevronRight />
          </a>
        </div>
        <div className="message-compose">
          <div className="compose-container">
            <div className="take-picture">

            </div>
            <div>

            </div>
            <div className="upload-image">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
