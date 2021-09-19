import React from "react";
import "../styles/matching.scss";
import splash from "../styles/vectors/matching-splash.svg"


import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import { ArrowBack, FavoriteRounded, Star } from "@mui/icons-material";
import { Gender, Hobby, HobbyType, Maybe } from "../generated-types";

// const topActivities: {
//   id: number;
//   icon: string;
//   activity: string;
//   rate: number;
//   unit: string;
// }[] = [
//     { id: 1, icon: "hiking-icon", activity: "Hiking", rate: 51, unit: "km/week" },
//     {
//       id: 2,
//       icon: "swimming-icon",
//       activity: "Swimming",
//       rate: 23,
//       unit: "km/week",
//     },
//     {
//       id: 3,
//       icon: "cycling-icon",
//       activity: "Cycling",
//       rate: 80,
//       unit: "km/week",
//     },
//   ];
const futurePlans: {
  id: number;
  icon: string;
  activity: string;
  location: string;
  date: string;
  address: string;
}[] = [
    {
      id: 1,
      icon: "hiking-icon",
      activity: "Hiking",
      location: "Little Bow Trail",
      date: "September 28th",
      address: "2343 Test Ave, Vancouver, BC",
    },
    {
      id: 2,
      icon: "swimming-icon",
      activity: "Swimming",
      location: "YMCA Southland",
      date: "October 15th",
      address: "2938 Test St., Vancouver, BC",
    },
  ];


const Introduction: React.FC<MatchingProps> = (props: MatchingProps) => {
  return (
    <div className="introduction">
      <h1>{props.firstName}</h1>
      <div className="p" id="age"><div className="icon"><FavoriteRounded /></div>
        <div className="age-text">{props.age}</div></div>
      <p>{props.bio}</p>
    </div>
  );
};

const TopActivities: React.FC<MatchingProps> = (props: MatchingProps) => {
  return (
    <div className="top-activities">
      <h2>Top Activities</h2>
      <ul className="activity-list">{props.hobbies &&
        props.hobbies.map((item) => {
          item &&
            <li className="activity-list-item" key={item._id}>
              <div className="activity-list-icon"><Star /></div>
              <div className="activity-list-text">{item.type} </div>
              <div className="activity-list-subtitle">- {item.rate} {item.unit}</div>
            </li>
        }
        )}</ul>
      <div id="more-activities">
        <Button sx={{ fontFamily: 'Poppins', fontSize: 9, textTransform: 'none' }}>More Activities {">"}</Button></div>
    </div>
  );
};

const FuturePlans: React.FC = () => {
  const listItems = futurePlans.map((item) => (
    <li key={item.id}>
      <div className="plans-list-item">
        <div className="plan-list-icon"><Star /></div>
        <div className="plan-list-text">
          {item.activity}
          <br />{item.date}</div>
        <div className="plan-list-map"><Star /></div>
      </div>
    </li>
  ));
  return (
    <div className="future-plans">
      <h2>Future Plans</h2>
      <ul className="plans-list">{listItems}</ul>
    </div>
  );
};

interface MatchingProps {
  bio: string
  firstName: string,
  gender: Gender,
  age: string,
  hobbies?: Maybe<Maybe<Hobby>[]> | undefined | null
}

export const Matching: React.FC<MatchingProps> = (props: MatchingProps) => {
  return (
    <div className="page">
      <Container>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Introduction {...props} />
        <div className="splash-container">
          <img src={splash} className="splash" />
        </div>
        <TopActivities {...props} />
        <div className="divider"></div>
        <FuturePlans />
      </Container>
    </div>
  );
};
