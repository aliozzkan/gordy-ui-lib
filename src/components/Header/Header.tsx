import { FC } from "react";
import { Button } from "../ui/button";

export interface HeaderProps {
  title: string;
}

const Header:FC<HeaderProps> = (props) => {
  return (
    <div>
      <span className="text-red-500 bg-red-100 px-5 py-1 rounded-full">{props.title}</span>
      <Button variant="destructive">Test</Button>
    </div>
  );
};

export default Header;
