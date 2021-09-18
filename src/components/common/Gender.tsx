import React from "react";
import { Gender as GenderOptions } from "../../generated-types";
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
