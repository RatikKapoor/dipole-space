import React, { useEffect, useState } from "react";
import "../styles/matching.scss";
import splash from "../styles/vectors/matching-splash.svg"


import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import { ArrowBack, FavoriteRounded, Star } from "@mui/icons-material";
import { useFindHobbiesQuery, Gender, Hobby, Maybe } from "../generated-types";


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
  const { data } = useFindHobbiesQuery();
  const [hobbies, setHobbies] = useState<Hobby[] | null>([])

  const updateHobbies = () => {
    const userHobbies: Hobby[] = [];

    const allHobbies = data?.findHobbies.items;
    allHobbies?.forEach((hobbyData) => {
      hobbyData && userHobbies.push(hobbyData);
    });

    //const matchHobbies = allHobbies?.filter(h => h?.usersHobby?._id === props.id)
    console.log("matchHobbies temp var", userHobbies);
    setHobbies(userHobbies);
    console.log("hobbies use state ", hobbies);
  }

  useEffect(() => {
    console.log(data)

    if (!data) return
    updateHobbies();

  }, [data])



  return (
    <div className="top-activities">
      <h2>Top Activities</h2>
      <ul className="activity-list">{props.hobbies &&
        hobbies && hobbies.map((item) => {
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
  id: string
  bio: string
  firstName: string,
  gender: Gender,
  age: string,
  hobbies?: Maybe<Maybe<Hobby>[]> | undefined | null
  isOwnProfile?: boolean
}

export const Matching: React.FC<MatchingProps> = (props: MatchingProps) => {
  return (
    <div className="page matching-page">
      <Container>
        {!props.isOwnProfile &&
          <IconButton>
            <ArrowBack />
          </IconButton>
        }
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
