import React from "react";
import { GenderOptions } from "../../types/GenderOptions";
import { Icon } from "./Icon";

interface GenderProps {
  gender: GenderOptions;
}

export const Gender: React.FC<GenderProps> = ({ gender }: GenderProps) => {
  return (
    <>
      {gender === GenderOptions.Female && (
        <Icon size={"50px"} icon={"female"} />
      )}
    </>
  );
};
