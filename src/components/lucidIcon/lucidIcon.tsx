import type { LucideProps } from "lucide-react";
import { icons } from "lucide-react";

import { cn } from "../../libs/utils";

export type IconType = keyof typeof icons;

export interface LIconProps extends LucideProps {
  name: IconType;
}

const LIcon = ({ name, ...props }: LIconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={cn(props.className)} {...props} />;
};

export default LIcon;
