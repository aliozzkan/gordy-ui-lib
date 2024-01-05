import type { LucideProps } from "lucide-react";
import { icons } from "lucide-react";
export type IconType = keyof typeof icons;
export interface LIconProps extends LucideProps {
    name: IconType;
}
declare const LIcon: ({ name, ...props }: LIconProps) => import("react/jsx-runtime").JSX.Element;
export default LIcon;
