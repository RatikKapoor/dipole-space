import React from "react";
import "../styles/matching.scss";
import splash from "../styles/vectors/matching-splash.svg"

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Close, FavoriteRounded, Star } from "@mui/icons-material";

const name = "Matthew";
const gender = "Female";
const age = "23 Years Old";
const bio = "Looking for a buddy for short hikes in the rocky mountain region.";
const topActivities: { id: number, icon: string, activity: string, rate: number, unit: string}[] = [
  { "id": 1, "icon": "hiking-icon", "activity": "Hiking", "rate": 51, "unit": "km/week"},
  { "id": 2, "icon": "swimming-icon", "activity": "Swimming", "rate": 23, "unit": "km/week"},
  { "id": 3, "icon": "cycling-icon", "activity": "Cycling", "rate": 80, "unit": "km/week"}
];
const futurePlans: { id: number, icon: string, activity: string, location: string, date: string, address: string}[] = [
  { "id": 1, "icon": "hiking-icon", "activity": "Hiking", "location": "Little Bow Trail", 
  "date": "September 28th", "address": "2343 Test Ave, Vancouver, BC"},
  { "id": 2, "icon": "swimming-icon", "activity": "Swimming", "location": "YMCA Southland", 
  "date": "October 15th", "address": "2938 Test St., Vancouver, BC"}
];

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <h1>{name}</h1>
      <p id="age">{gender} {age}</p>
      <p>{bio}</p>
    </div>
  );
};

const TopActivities: React.FC = () => {
  const listItems = topActivities.map((item) =>
    <li className="activity-list-item" key={item.id}>
      <span className="icon-placeholder"><Star /></span> {item.activity} - <span className="subtitle">{item.rate} {item.unit}</span>
    </li>
  );
  return (
    <div className="top-activities">
      <h2>Top Activities</h2>
      <ul className="activity-list">{listItems}</ul>
      <Button>More Activities</Button>
    </div>
  );
};

const FuturePlans: React.FC = () => {
  const listItems = futurePlans.map((item) =>
    <li key={item.id}>
      <div className="plans-list-item">
        <div className="plan-list-icon"><Star /></div> 
        <div className="plan-list-text">
          {item.activity} 
          <br />{item.date}</div>
        <div className="plan-list-map"><Star /></div>
      </div>
    </li>
  );
  return (
    <div className="future-plans">
      <h2>Future Plans</h2>
      <ul className="plans-list">{listItems}</ul>
    </div>
  );
};

export const Matching: React.FC = () => {
  return (
    <div className="page">
      <Container maxWidth="xs">
        <Introduction />
        <img src={splash} className="splash" />
        <TopActivities />
        <FuturePlans />
      </Container>
    </div>
  );
};
