import { FC } from "react";
import { Button } from "../ui/button";
import LIcon from "../lucid-icon/lucid-icon";

export interface HeaderProps {
  title: string;
}

const Header:FC<HeaderProps> = (props) => {
  return (
    <div>
      <LIcon size={24} name="ChevronDown" />
      <span className="text-red-500 bg-red-100 px-5 py-1 rounded-full">{props.title}</span>
      <Button variant="destructive">Test name</Button>
    </div>
  );
};

export default Header;
