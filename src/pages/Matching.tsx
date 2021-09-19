import React from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import "@fontsource/poppins";

const name = "Matthew";
const gender = "Female";
const age = "23 Years Old";
const topActivities: {
  id: number;
  icon: string;
  activity: string;
  rate: number;
  unit: string;
}[] = [
  { id: 1, icon: "hiking-icon", activity: "Hiking", rate: 51, unit: "km/week" },
  {
    id: 2,
    icon: "swimming-icon",
    activity: "Swimming",
    rate: 23,
    unit: "km/week",
  },
  {
    id: 3,
    icon: "cycling-icon",
    activity: "Cycling",
    rate: 80,
    unit: "km/week",
  },
];
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

const Introduction: React.FC<any> = (props: any) => {
  const { bio = " " } = props;

  return (
    <Paper>
      <h1>{name}</h1>
      <p>
        {gender} {age}
      </p>
      <p>{bio}</p>
    </Paper>
  );
};

const TopActivities: React.FC = () => {
  const listItems = topActivities.map((item) => (
    <li key={item.id}>
      {item.icon} {item.activity} - {item.rate} {item.unit}
    </li>
  ));
  return (
    <Paper>
      <h2>Top Activities</h2>
      <ul>{listItems}</ul>
      <Button>More Activities</Button>
    </Paper>
  );
};

const FuturePlans: React.FC = () => {
  const listItems = futurePlans.map((item) => (
    <li key={item.id}>
      {item.icon} {item.activity} {item.address}
      <br />
      {item.date}
    </li>
  ));
  return (
    <Paper>
      <h2>Future Plans</h2>
      <ul>{listItems}</ul>
    </Paper>
  );
};

export const Matching: React.FC<any> = (props: any) => {
  const { bio = " " } = props;

  return (
    <div className="page">
      <Container>
        <Introduction bio={bio} />
        <div className="splashArt"></div>
        <TopActivities />
        <FuturePlans />
      </Container>
    </div>
  );
};
