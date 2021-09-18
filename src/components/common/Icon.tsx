import React from "react";

import IcomoonReact from "icomoon-react";
import IconSet from "../../styles/icons/selection.json";

interface IconProps {
  color?: string;
  size: string | number;
  icon: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  color,
  size,
  icon,
  className,
}: IconProps) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={IconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};
